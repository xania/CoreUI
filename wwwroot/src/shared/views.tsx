import * as React from "react"
import { search } from  "./search"

export function message(text: string) {
    return (
        <div>{text}</div>
    );
}

export function intro() {
    return (
        <div className="flex-columns-container">
            intro
            <a href="/log">log</a>
            <a href="/test/ff">test ff</a>
            <a href="/test/dd">test dd</a>
            <a href="/test/dd/gg">test dd gg</a>
        </div>
    );
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
            {typeof header === "string" ? sectionHeader(header) : header }
            <div style={{ flexGrow: 1 }}>
                {main}
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
