﻿import * as React from "react"
import { search } from "./search"
import * as Rx from "rxjs"
import * as Ro from "rxjs/operators"

export function message(text: string) {
    return (
        <div>{text}</div>
    );
}

export function intro() {
    let view$: Rx.Observable<JSX.Element> = Rx.interval(100).pipe(
        Ro.startWith("..."),
        Ro.map(x => <div>{x}</div>)
    );

    return (
        <div className="flex-columns-container">
            <h1>tiles</h1>
            <a href="/log">log</a>
            <a href="/test/ff">test ff</a>
            <a href="/test/dd">test dd</a>
            <a href="/test/dd/gg">test dd gg</a>
            {awaitView(view$)}
            <div>
                <form action="/drive/file/test" encType="multipart/form-data" method="POST">
                    <input type="file" accept="image/*" name="files" capture="capture" />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
}

type AwaitProps = { children: Rx.ObservableInput<JSX.Element> }
export class Await extends React.Component<AwaitProps> {

    private subscription: Rx.Subscription;

    state = {
        view: null as JSX.Element
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.subscription = Rx.from(this.props.children).subscribe(view => this.setState({ view }));
    }

    componentWillUnmount(): void {
        this.subscription.unsubscribe();
    }


    render() {
        return (
            <div>
                {this.state.view}
            </div>
        );
    }
}

export function awaitView(view$: Rx.ObservableInput<JSX.Element>) {
    return <Await>{view$}</Await>;
}

export function sample() {
    return (
        <React.Fragment>
            <div style={{ padding: "16px" }}>
                {search({ next: console.log })}
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XN</td>
                        <td>Xania software</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export function section(header: string | JSX.Element, main: JSX.Element) {
    return (
        <div className="panel flex-columns-container">
            {typeof header === "string" ? sectionHeader(header) : header}
            <div style={{ flexGrow: 1 }}>
                {main}
            </div>
        </div>
    );
}

function sectionHeader(title: string) {
    return (
        <header>
            <div style={{ flexGrow: 1 }}>
                <a href="/" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </a>
                <h3>{title}</h3>
            </div>
        </header>
    );
}
