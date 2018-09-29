﻿import * as Rx from "rxjs";
import * as Ro from "rxjs/operators";
import * as ReactDOM from "react-dom"
import { isPromise } from 'rxjs/internal/util/isPromise';
import { isInteropObservable } from 'rxjs/internal/util/isInteropObservable';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { fromObservable } from 'rxjs/internal/observable/fromObservable';

declare type View = JSX.Element;
declare type Value<T> = T | Rx.Observable<T> | Rx.InteropObservable<T> | PromiseLike<T>;
declare type ActionFunc = ((context: IActionContext) => IActionResult | Value<View> | void);

type Router = {};

export interface IActionContext {
    router: Router;
    params?: { [key: string]: any };
}

export interface IRenderContext {
    container: Element,
    router: Router;
    params?: { [key: string]: any };
    toast: Toast;
}

export interface IDisposable {
    dispose();
}

type ActionResolution = { action: IAction, partial: Route, tail: Route, params: { [key: string]: any } };

export class Routes {
    private map: { route: Route, action: IAction }[] = [];

    public set(path: string, action: IAction) {
        this.map.push({ route: path.split("/").filter(x => !!x), action });
    }

    resolve(route: Route): ActionResolution | null {
        for (let entry of this.map) {
            let match = routeTemplate(entry.route).match(route);
            if (match) {
                return {
                    action: entry.action,
                    partial: route.slice(0, entry.route.length),
                    tail: route.slice(entry.route.length),
                    params: match
                };
            }
        }

        return null;
    }
}

interface IAction {
    execute(context: IActionContext): Value<IActionResult>;
}

export interface IActionResult {
    render(context: IRenderContext): RenderResult | void;
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

﻿function log(category: string) {
    return (x) => {
        console.log(category + ": ", x);
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

    abstract render(context: IActionContext): RenderResult;
}

export class ReactViewResult extends ActionResultBase {
    constructor(public view: Value<View>) { super(); }

    render(context: IRenderContext): RenderResult {
        const { container } = context;
        const node = document.createElement("section");
        node.className = "panel";
        container.appendChild(node);
        var subscr = valueToObservable(this.view).subscribe({
            next(view) {
                return ReactDOM.render(view, node);
            },
            error(err) {
                context.toast.error("unhandled error");
                console.error("unhandled error", err);
            }
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

export class RouteAction implements IAction {
    constructor(public action: ActionFunc | IActionResult) {
    }

    execute(context: IActionContext): IActionResult {
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
            : typeof action === "string" 
                ? new ControllerAction(action, "index")
                : typeof (action) === "function"
                    ? new RouteAction(action)
                    : new RouteAction(() => action);
    }
}

export class ControllerAction implements IAction {
    async execute(context: IActionContext) {
        let module = await window["SystemJS"].import(this.module)
        let action = module[this.action]
        let result = action(context);

        if (isActionResult(result))
            return result;
        else if (result) {
            return new ReactViewResult(result);
        }
    }

    constructor(public module: string, public action: string) {
    }
}

class NotFoundResult implements IActionResult {
    routes: Routes = new Routes();

    constructor(public path: Route) { }

    partial(path: string): IAction {
        return new RouteAction(() => new EmptyResult());
    }

    render(context: IRenderContext) {
        const message = `Path not found: ${this.path.join("/")}`;
        context && context.toast.error(message);
    }
}

export class EmptyResult implements IActionResult {
    routes: Routes = new Routes();

    partial(path: string): IAction {
        return new RouteAction(() => this);
    }

    render(context: IActionContext) {
    }
}

export class ErrorResult implements IActionResult {
    routes: Routes = new Routes();

    constructor(private err: Error) {

    }

    render(context: IRenderContext) {
        console.error(this.err);
        context.toast.error(this.err.message);
    }
}

class RouteResult {
    private _next: RouteResult = null;
    private renderResult: RenderResult | void = null;

    constructor(public route: Route, public value: IActionResult) { }

    set next(value: RouteResult) {
        this._next && this._next.dispose();
        this._next = value;
    }

    get next(): RouteResult {
        return this._next;
    }

    dispose() {
        const { renderResult } = this;
        if (renderResult instanceof RenderResult) {
            if (renderResult.disposable)
                renderResult.disposable.dispose();
        }
    }

    render(renderContext: IRenderContext) {
        if (!this.renderResult)
            this.renderResult = this.value.render(renderContext);
    }
}

type RouteEntry = {
    route: Route;
    parent: RouteResult;
}

interface Toast {
    error(message: string);
}

export type Route = any[];

function arrayCompare(xv: any[], yv: any[]) {
    if (xv.length !== yv.length)
        return false;

    let i = xv.length;
    while (i--) {
        if (xv[i] !== yv[i])
            return false;
    }

    return true;
}

export class BrowserRouter {

    private actions$: Rx.Observable<Route>;
    private active$: Rx.Subject<Route>;

    constructor() {
        var passive$ = Rx.timer(0, 50).pipe(
            Ro.map(() => location.pathname),
            Ro.distinctUntilChanged(),
            Ro.map((pathname: string) => pathname.split("/").filter(x => !!x) as Route),
        );

        this.active$ = new Rx.Subject<Route>();

        this.actions$ =
            Rx.merge(passive$, this.active$)
                .pipe(Ro.distinctUntilChanged(arrayCompare));
    }

    start(root: Value<IActionResult>) {
        const actionContext: IActionContext = {
            router: this
        };

        function map<T, U>(value: Value<T>, project: (t: T) => U): Rx.Observable<U> {
            return valueToObservable(value).pipe(
                Ro.map(project)
            );
        }

        function resolveRoute(routeEntry: RouteEntry): Rx.Observable<RouteEntry> {
            const { route, parent } = routeEntry;

            if (route.length === 0) {
                parent.next = null;
                return Rx.empty();
            }

            const resolution = parent.value.routes.resolve(route);
            if (resolution) {
                let next = parent.next;
                let partialRoute = resolution.partial;
                if (next && arrayCompare(next.route, partialRoute)) {
                    return Rx.of(<RouteEntry>{
                        parent: next,
                        route: resolution.tail,
                    });
                }

                return map(
                    resolution.action.execute({ ...actionContext, params: resolution.params || {} }),
                    (actionResult: IActionResult) => {
                        parent.next =
                            new RouteResult(partialRoute, actionResult);

                        return <RouteEntry>{
                            parent: parent.next,
                            route: resolution.tail
                        };
                    });
            }

            parent.next = new RouteResult(route, new NotFoundResult(route));
            return Rx.of(<RouteEntry>{
                parent: parent.next,
                route: []
            });
        }

        return valueToObservable(root)
            .pipe(
                Ro.map(root => new RouteResult([], root)),
                Ro.reduce((acc, value: RouteResult) => {
                    acc.dispose();
                    console.log("root element is disposed!", acc);
                    return value;
                }),
                Ro.combineLatest(this.actions$, (rootResult, route) => <RouteEntry>{ parent: rootResult, route }),
                Ro.expand(resolveRoute),
                Ro.map(e => e.parent)
            );
    }

    public action = (route: string | Route) => {
        if (typeof route === "string") {
            let pathname = route;
            window.history.pushState(null, null, pathname);
            this.active$.next(route.split('/').filter(x => !!x));
        } else {
            window.history.pushState(null, null, `/${route.join("/")}`);
            this.active$.next(route);
        }
    }
}

export class RenderResult {
    constructor(public disposable: IDisposable, public actionResult: IActionResult) {
    }
}

export function routeTemplate(route: string | Route) {
    let routeParts = typeof route === "string" ? route.split("/") : route;
    return {
        match(paths: any[]): { [key: string]: any } {
            let params = {};
            for (let i = 0; i < routeParts.length; i++) {
                let path = paths[i];
                let route = routeParts[i];
                if (path === route) {
                    // ok, continue matching...
                }
                else if (path) {
                    if (route.startsWith(":")) {
                        params[route.substr(1)] = path;
                    } else if (route !== path) {
                        return null;
                    }
                } else {
                    return null;
                }
            }
            return params;
        }
    }
}

