import * as Rx from "rxjs";
import { map, switchMap, distinctUntilChanged, tap, shareReplay, throttleTime, scan as scn, mergeScan, mergeMap } from "rxjs/operators";
import * as Ops from "rxjs/operators";
import * as ReactDOM from "react-dom"
import { isPromise } from 'rxjs/internal/util/isPromise';
import { isInteropObservable } from 'rxjs/internal/util/isInteropObservable';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { fromObservable } from 'rxjs/internal/observable/fromObservable';
import * as views from "./shared/views"

export function notFound(path: string) {
    return views.message("not found: " + path);
}

declare type View = JSX.Element;
declare type RoutePath = string | ((str: string) => any) | RegExp;
declare type Disposable = IDisposable | PromiseLike<IDisposable> | null;
declare type Value<T> = T | Rx.Observable<T> | Rx.InteropObservable<T> | PromiseLike<T>;
declare type ActionResult = IActionResult | Value<View>;
declare type ActionFunc = ((context?: IActionContext) => ActionResult);

interface IActionContext {
    container: Element
}

function dataReady<T, U>(data: T | PromiseLike<T>, resolve: (x: T) => U): U | PromiseLike<U> {
    if (typeof data === "undefined" || data === null)
        return void 0;

    var promise = data as PromiseLike<T>;
    if (promise && promise.then)
        return promise.then(resolve);

    return resolve(data as T);
}

function scan<T, U>(list: T[], fn: (t: U, x: T, idx?: number) => U, acc: U) {
    console.debug("scan", arguments);
    let idx = 0;
    const len = list.length;
    const result: U[] = [];
    while (idx < len) {
        var next = fn(acc, list[idx], idx);
        result.push(next);
        acc = next;
        idx++;
    }
    return result;
}

export interface IDisposable {
    dispose();
}

class Routes {
    private map: Map<string, IAction> = new Map();

    public set(path: string, action: IAction) {
        this.map.set(path, action);
    }

    resolve(path: string): IAction {
        var result = this.map.get(path);
        if (result === void 0 || result === null)
            return new RouteAction(() => notFound(path));
        return result;
    }
}

interface IAction {
    execute(context?: IActionContext): Value<IActionResult>;
}

export interface IActionResult {
    partial(path: string): IAction;
    render(context?: IActionContext): RenderResult;
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
    route(path: string, action: IAction | ActionFunc | ActionResult): this {
        var a =
            isAction(action)
                ? action
                : typeof (action) === "function"
                ? new RouteAction(action)
                : new RouteAction(() => action);
        this.routes.set(path, a);
        return this;
    }

    partial(path: string): IAction {
        return this.routes.resolve(path);
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

    routes: Routes;
}

class RouteAction implements IAction {
    constructor(public action: ActionFunc | ActionResult) {
    }

    execute(context?: IActionContext): IActionResult {
        if (isActionResult(this.action))
            return this.action;
        if (typeof this.action === "function") {
            const result = this.action(context);
            if (isActionResult(result))
                return result;
            else {
                return new ReactViewResult(result);
            }
        }
        return new ReactViewResult(this.action);
    }
}

const emptyResult: IActionResult = {
    render(): RenderResult {
        return new RenderResult(null, this);
    }, 
    partial() {
        return null;
    }
}
class RouteCache {
    private path$: Rx.Subject<string> = new Rx.Subject();
    private pathResults$: Rx.Observable<RouteCache>;

    constructor(private fn: (p: string) => Rx.Observable<IActionResult>, public basePath: string) {
        this.pathResults$ = this.path$.pipe(
            Ops.distinctUntilChanged(),
            Ops.delay(3000),
            switchMap((p: string) => this.fn(p).pipe(map(r => RouteCache.create(r, p)))),
            // map(RouteCache.create),
            // Ops.shareReplay(1),
            Ops.tap(v => console.log("pass value", v))
        );

    }

    static create(actionResult: IActionResult, basePath: string) {
        console.log("create", actionResult);
        return new RouteCache(
            path => executeAction(resolveAction(actionResult, path)),
            basePath
        );
    }

    get(path: string) {
        //if (this.prevPath === path) {
        //    console.debug("reuse action result", path, this.cacheResult$);
        //    return this.cacheResult$;
        //}

        this.path$.next(path);
        return this.pathResults$;
    }
}

const executeAction: (action: IAction) => Rx.Observable<IActionResult>
    = (action: IAction) => {
        var result = action ? action.execute(this) : emptyResult;
        console.debug('executeAction', action, result);
        return valueToObservable(result);
    };

function resolveAction(ar: IActionResult, path: string) {
    return ar && ar.partial(path);
}

class CacheEntry {
    constructor(public path: string, public value: IActionResult, public renderResult: RenderResult) { }
}

export class Router {

    private actions$: Rx.Observable<string[]>;
    private active$: Rx.Subject<string>;

    constructor(public container: Element, public root: Value<IActionResult>) {
        var passive$ = Rx.timer(0, 50).pipe(map(() => location.pathname));
        this.active$ = new Rx.Subject<string>();
        this.actions$ = Rx.merge(passive$, this.active$).pipe(
            distinctUntilChanged(),
            map((pathname: string) => pathname ? pathname.split("/").filter(x => !!x) : []),
        );
        this.start();
    }

    private start() {
        var cache: CacheEntry[] = [];
        const { container } = this;

        function disposeAt(idx: number) {
            for (var i = idx; i < cache.length; i++) {
                var renderResult = cache[i] && cache[i].renderResult;
                renderResult && renderResult.disposable && renderResult.disposable.dispose();
            }
            cache.length = idx;
        }

        function renderPartial(actionResult: IActionResult, { path, idx }: { path: string, idx: number }) {
            if (cache[idx] && cache[idx].path === path)
                return Rx.of(cache[idx].value);

            disposeAt(idx);
            return executeAction(resolveAction(actionResult, path))
                .pipe(tap(r => cache[idx] = new CacheEntry(path, r, r.render({ container }))));
        }

        valueToObservable(this.root).pipe(
            mergeMap(
                root => this.actions$.pipe(
                    switchMap((parts: string[]) => {
                        disposeAt(parts.length);
                        return Rx.from(parts.map((x, i) => ({ path: x, idx: i })))
                            .pipe(mergeScan(renderPartial, root));
                    }))
            )).subscribe(x => console.log("subscribe", x));
    }

    action(pathname: string) {
        window.history.pushState(null, null, pathname);
        this.active$.next(pathname);
    }

    // /**
    // * Async resolve action
    // * @param parent
    // * @param path
    // */
    //resolve (parent: ActionResult, path: string): ActionResult {
    //    return flatMap(parent, p => p.partial(path));
    //}
}

class RenderResult {
    constructor(public disposable: IDisposable, public actionResult: IActionResult) {
    }
}
