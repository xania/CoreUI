import * as React from 'react'
import * as Rx from "../../vendor"
import { LoadingIndicator } from "./loading-indicator"

export function rateLimit<T, U>(project: (arg: T) => Rx.ObservableInput<U>, loader$: Rx.NextObserver<boolean>): Rx.UnaryFunction<Rx.Observable<T>, Rx.Observable<U>> {
    return Rx.pipe(
        Rx.distinctUntilChanged<T>(),
        Rx.tap(() => loader$.next(true)),
        Rx.debounceTime(400),
        Rx.switchMap(project),
        Rx.tap(() => loader$.next(false)),
        Rx.share()
    );
}

export function search(output$: Rx.NextObserver<string>) {
    return (
        <input autoFocus={true} className="form-control" placeholder="Search..." onChange={evt => output$.next(evt.target.value)} />
    );
}

export function loader(loading: boolean, content) {
    return (
        <LoadingIndicator loading={loading}>
            { content }
        </LoadingIndicator>
    );
}
