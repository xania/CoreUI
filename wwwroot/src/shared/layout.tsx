import * as React from "react"
import * as Rx from 'rxjs'
import { filter, map, startWith, combineLatest } from "rxjs/operators"
import { rateLimit, search, loader } from "../shared/search"
import { isErrorResult, ErrorResult, Func, AsyncFunc } from "./data"

export function section(header, ...children) {
    return (
            <div className="panel flex-columns-container">
                {typeof header === "string" ? sectionHeader(header) : header}
                {children.map((x, idx) => <React.Fragment key={idx}>{x}</React.Fragment>)}
                <div className="flex-rows-container">
                    <a href="/orders" className="btn btn-square btn-outline-info" style={{ flexGrow: 1, height: "40px" }}>
                        <span className="cui-cart"></span> Orders
                    </a>
                    <a href="/overview" className="btn btn-square btn-outline-success" style={{ flexGrow: 1, height: "40px" }}>
                        <span className="cui-lightbulb"></span> Overzicht
                    </a>
                </div>
            </div>
    );
}

function sectionHeader(title: string) {
    return (
        <header>
            <a href="/" className="btn btn-left btn-default" style={{ flexGrow: 1 }}>
                <span className="cui-chevron-left"></span> Terug
            </a>
            <div className="flex-rows-container">
                <div style={{ flexGrow: 1 }}>
                    <h3>{title}</h3>
                </div>
            </div>
        </header>
    );
}

export function searchSection<T>(title: string, getData: (term: string) => PromiseLike<T | ErrorResult>, renderData: Func<T, JSX.Element>): Rx.Observable<JSX.Element> {
    const input$ = new Rx.Subject<string>();
    const loading$ = new Rx.BehaviorSubject<boolean>(false);
    const data$ = input$.pipe(rateLimit(getData, loading$));

    return data$.pipe(
        filter((x: T | ErrorResult) => {
            if (isErrorResult(x)) {
                // TODO we need to show a toast here.
                console.error(x.payload);
                return false;
            }
            return true;
        }),
        map(renderData),
        startWith(<main>Geen data...</main>),
        combineLatest(loading$, (dataView, loading) => loader(loading, dataView)),
        map(dataView => section(title, search(input$), dataView, <div>hello</div>))
    );
}