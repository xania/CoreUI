import * as React from 'react'
import * as Rx from 'rxjs'
import { tap, debounceTime, distinctUntilChanged, switchMap, share } from 'rxjs/operators'
import { LoadingIndicator } from "./loading-indicator"

export function rateLimit<T, U>(project: (arg: T) => Rx.ObservableInput<U>, loader$: Rx.NextObserver<boolean>): Rx.UnaryFunction<Rx.Observable<T>, Rx.Observable<U>> {
    return Rx.pipe(
        distinctUntilChanged<T>(),
        tap(() => loader$.next(true)),
        debounceTime(400),
        switchMap(project),
        tap(() => loader$.next(false)),
        share()
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
