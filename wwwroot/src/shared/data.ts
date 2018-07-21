export type ErrorResult = { success: false, payload: any };
export declare type AsyncFunc<T, U> = (x: T) => PromiseLike<U>
export declare type Func<T, U> = (x: T) => U

export function isPromiseLike<T>(p: T | PromiseLike<T>): p is PromiseLike<T> {
    return p && typeof (<PromiseLike<T>>p).then === "function";
}

export function isErrorResult<T>(result: T | ErrorResult): result is ErrorResult {
    return result['success'] === false;
}

export function errorResult(payload): ErrorResult {
    return { success: false, payload }
}

export function tryFetch<T>(url: string, init?: RequestInit): PromiseLike<T | ErrorResult> {

    var config = Object.assign({
            credentials: "same-origin",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        },
        init);

    return fetch(url, config).then(response => {
        if (response.ok) return response.json();
        return response.json().then(errorResult);
    });
}