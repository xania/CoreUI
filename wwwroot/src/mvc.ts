import * as Rx from "rxjs";
import * as Ro from "rxjs/operators";
import * as ReactDOM from "react-dom"
import { isPromise } from 'rxjs/internal/util/isPromise';
import { isInteropObservable } from 'rxjs/internal/util/isInteropObservable';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { fromObservable } from 'rxjs/internal/observable/fromObservable';
import toast from "./diagnostics/toast"

import * as layout from "./shared/layout"
import * as logger from "./diagnostics/logger"

declare type View = JSX.Element;
declare type Value<T> = T | Rx.Observable<T> | Rx.InteropObservable<T> | PromiseLike<T>;
declare type ActionFunc = ((context?: IActionContext) => IActionResult | Value<View> | void);

export interface IActionContext {
    container: Element;
    router: Router;
}

export interface IDisposable {
    dispose();
}

class Routes {
    private map: Map<string, IAction> = new Map();

    public set(path: string, action: IAction) {
        this.map.set(path, action);
    }

    resolve(pathname: string): ActionResolution | null {
        var match = /^\/([^\/]+)/.exec(pathname);

        if (match) {
            let path = match[1];
            var action = this.map.get(path);
            if (action === void 0 || action === null)
                return null;
            return { action, path: `/${path}` };
        }

        return null;
    }
}

interface IAction {
    execute(context?: IActionContext): Value<IActionResult>;
}

type ActionResolution = { action: IAction, path: string };

export interface IActionResult {
    partial?(path: string): IAction;
    render(context?: IActionContext): RenderResult | void;
    routes: Routes;
}

function valueToObservable<T>(input: Value<T>): Rx.Observable<T> {
    if (input === null && input === void 0) {
        return Rx.of(input as any);
    } else if (Rx.isObservable(input)) {
        return input;
    } else if (isInteropObservable(input)) {
        return fromObservable(input, null);
    } else if (isPromise(input)) {
        return fromPromise(input);
    } else {
        return Rx.of(input);
    }
}

function isAction(action: any): action is IAction {
    return action && typeof (action) === "object" && typeof action["execute"] === "function";
}
function isActionResult(action): action is IActionResult {
    return action && typeof (action) === "object" && typeof action["render"] === "function";
}
abstract class ActionResultBase implements IActionResult {
    routes: Routes = new Routes();
    route(path: string, action: IAction | ActionFunc | IActionResult): this {
        this.routes.set(path, RouteAction.create(action));
        return this;
    }

    partial(path: string): IAction {
        return this.routes.resolve(path).action;
    }

    abstract render(context?: IActionContext): RenderResult;
}

export class ReactViewResult extends ActionResultBase {
    constructor(public view: Value<View>) { super(); }

    render(context?: IActionContext): RenderResult {
        const { container } = context;
        const node = document.createElement("section");
        node.className = "panel";
        container.appendChild(node);
        var subscr = valueToObservable(this.view).subscribe(view => {
            return ReactDOM.render(view, node);
        });
        var d = {
            dispose() {
                subscr.unsubscribe();
                ReactDOM.unmountComponentAtNode(node);
                node.remove();
            }
        }

        return new RenderResult(d, this);
    }
}

class RouteAction implements IAction {
    constructor(public action: ActionFunc | IActionResult) {
    }

    execute(context?: IActionContext): IActionResult {
        if (isActionResult(this.action))
            return this.action;
        if (typeof this.action === "function") {
            const result = this.action(context);
            if (isActionResult(result))
                return result;
            else if (result) {
                return new ReactViewResult(result);
            }
        }
        return new EmptyResult();
    }

    static create(action: IAction | ActionFunc | IActionResult) {
        return isAction(action)
            ? action
            : typeof (action) === "function"
                ? new RouteAction(action)
                : new RouteAction(() => action);
    }
}

class NotFoundResult implements IActionResult {

    routes: Routes = new Routes();

    constructor(public path: string) { }

    partial(path: string): IAction {
        return null;
    }

    render(context?: IActionContext) {
        const message = `Path not found: ${this.path}`;
        const url = location ? location.href : this.path;
        logger.error({ message, url, date: new Date() });
        toast.error({ message });
    }
}

export class EmptyResult implements IActionResult {
    routes: Routes = new Routes();

    partial(path: string): IAction {
        return new RouteAction(() => this);
    }

    render(context?: IActionContext) {
    }
}

export class ErrorResult implements IActionResult {
    routes: Routes = new Routes();

    constructor(private err: Error) {

    }

    partial(path: string): IAction {
        return new RouteAction(() => new EmptyResult());
    }

    render(context?: IActionContext) {
        console.error(this.err);
        toast.error({ message: this.err.message });
    }
}

class CacheEntry {
    constructor(public value: IActionResult, public renderResult: RenderResult | void) { }
}

type RouteEntry = {
    pathname?: string,
    parent: IActionResult,
    cache: { [key: string]: CacheEntry }
}

export class Router {
    private actions$: Rx.Observable<string>;
    private active$: Rx.Subject<string>;
    private cache: CacheEntry[] = [];

    constructor(public container: Element, public root: Value<IActionResult>) {
        var passive$ = Rx.timer(0, 50).pipe(Ro.map(() => location.pathname));
        this.active$ = new Rx.Subject<string>();
        this.actions$ = Rx.merge(passive$, this.active$).pipe(
            Ro.distinctUntilChanged()
            // map((pathname: string) => pathname ? pathname.split("/").filter(x => !!x) : [])
        );

        this.start();
    }

    start() {
        const actionContext: IActionContext = { container: this.container, router: this };

        function map<T, U>(value: Value<T>, project: (t: T) => U): Rx.Observable<U> {
            return valueToObservable(value).pipe(
                Ro.map(project)
            );
        }

        function resolve({ parent, pathname, cache }: RouteEntry): Rx.Observable<RouteEntry> {

            const resolution = parent.routes.resolve(pathname);
            if (resolution) {
                const tail = pathname.substr(resolution.path.length);
                if (cache[resolution.path]) {
                    let cacheEntry: CacheEntry = cache[resolution.path];

                    return Rx.of(<RouteEntry>{
                        parent: cacheEntry.value,
                        pathname: tail,
                        cache: {}
                    });
                }

                return map(
                    resolution.action.execute(actionContext),
                    actionResult => {
                        cache[resolution.path] = new CacheEntry(actionResult, actionResult.render(actionContext));

                        return <RouteEntry>{
                            parent: actionResult,
                            pathname: tail,
                            cache: {}
                        };
                    });
            }
            return null;
        }

        let rootCache = {};
        valueToObservable(this.root)
            .pipe(
                Ro.switchMap((root: IActionResult) =>
                    this.actions$.pipe(
                        Ro.switchMap((pathname: string) =>
                        Rx.of(<RouteEntry>{ pathname, parent: root, cache: rootCache })
                                .pipe(
                                    Ro.expand((entry: RouteEntry) => {
                                        const { pathname } = entry;

                                        if (typeof pathname === "string" && pathname) {
                                            return resolve(entry) ||
                                                Rx.of(<RouteEntry>{
                                                    parent: new NotFoundResult(pathname),
                                                    pathname: "",
                                                    cache: {}
                                                });
                                        }

                                        return Rx.empty();
                                    })
                                )
                        )
                    )
                )
            ).subscribe((entry: RouteEntry) => console.log(entry.parent, entry.cache));
    }

    executeAction(action: IAction): Rx.Observable<IActionResult> {
        if (action) {
            let result = action.execute({ container: this.container, router: this });
            return valueToObservable(result);
        } else {
            return Rx.empty();
        }
    }

    disposeAt(idx: number) {
        const { cache } = this;
        for (let i = idx; i < cache.length; i++) {
            let renderResult: RenderResult | void = cache[i] && cache[i].renderResult;
            if (renderResult instanceof RenderResult) {
                renderResult.dispose();
            }
        }
        cache.length = idx;
    }

    public action = (pathname: string) => {
        window.history.pushState(null, null, pathname);
        this.active$.next(pathname);
    }

    //public push = (path: string, action: IAction | ActionFunc | IActionResult) => {
    //    const { cache } = this,
    //        idx = cache.length,
    //        actionContext: IActionContext = { container: this.container, router: this };

    //    return executeAction(RouteAction.create(action), actionContext)
    //        .pipe(Ro.tap((r: IActionResult) => {
    //            var result = r.render(actionContext);
    //            if (result instanceof RenderResult) {
    //                cache[idx] = new CacheEntry(r, result);
    //                window.history.pushState(null, null, path);
    //            }
    //        }))
    //        .subscribe();
    //}

    public parent = () => {
        var i = location.pathname.lastIndexOf('/');
        if (i >= 0) {
            var parentPath = location.pathname.substr(0, i);
            window.history.pushState(null, null, "/" + parentPath);
        } else {
            toast.error({ message: 'no parent' });
        }
    }

    public modal = (title: string, body: View) => {
        const { container } = this;
        const node = document.createElement("div");
        node.className = "modal";
        node.tabIndex = -1;
        node.setAttribute("role", "dialog");

        container.appendChild(node);

        var modal$ = layout.modal(title, body);
        var observer = {
            next(view) {
                console.log(view);
                return ReactDOM.render(view, node);
            },
            complete() {
                ReactDOM.unmountComponentAtNode(node);
                node.remove();
            },
            error(err) {
                console.error(err);
            }
        };
        var subscription = modal$.subscribe(observer);

        return {
            dismiss() {
                subscription.unsubscribe();
                observer.complete();
            }
        }
    }
}

class RenderResult {
    constructor(public disposable: IDisposable, public actionResult: IActionResult) {
    }

    dispose() {
        const { disposable } = this;
        if (disposable)
            disposable.dispose();
    }
}


