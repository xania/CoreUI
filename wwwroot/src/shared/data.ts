import * as Rx from "vendor";

export type ErrorResult = { success: false, type: "invalid" | "unauthorized", payload: () => any };
export declare type AsyncFunc<T, TU> = (x: T) => PromiseLike<TU>
export declare type Func<T, TU> = (x: T) => TU

export function isErrorResult<T>(result: T | ErrorResult): result is ErrorResult {
    return result['success'] === false;
}

function responseType(response): "unauthorized" | "invalid" {
    return response.status === 401 ? "unauthorized" : "invalid";
}

export function errorResult(response): ErrorResult {
    return {
        success: false,
        type: responseType(response),
        payload: () => response.json()
    };
}

const tryFetchDefaults = {
    credentials: "same-origin",
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
    }
}

export function tryFetch<T>(url: string, init?: RequestInit): PromiseLike<T | ErrorResult> {
    const config = Object.assign(tryFetchDefaults, init);

    return fetch(url, config).then(response => {
        if (response.ok)
            return response.json();

        return Promise.reject(errorResult(response));
    });
}

export class PipeSubject<T, U> extends Rx.Observable<U> {
    constructor(private input$: Rx.Subject<T>, private output$: Rx.Observable<U>) {
        super(output$.subscribe.bind(output$));
    }

    static create<T>() {
        var input$ = new Rx.Subject<T>();
        return new PipeSubject(input$, input$);
    }

    next(value: T) {
        this.input$.next(value);
    }

    bind<V>(handler: Rx.OperatorFunction<U, V>): PipeSubject<T, V> {
        return new PipeSubject<T, V>(this.input$, handler(this.output$));
    }
}
