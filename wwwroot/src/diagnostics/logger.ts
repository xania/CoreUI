import * as signalR from '@aspnet/signalr'
import * as Rx from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { create, IClientError } from "./view"
import { ReactViewResult } from "../mvc"
import * as views from "../shared/views"

export function info(message: string) {
    return log('info', JSON.stringify(message));
};

export function warn(message: string) {
    return log('warn', JSON.stringify(message));
};

export function error(obj) {
    return log('error', JSON.stringify(obj));
};

export function debug(message: string) {
    return log('debug', JSON.stringify(message));
};

function log(type: 'info' | 'error' | 'warn' | 'debug', body) {
    return fetch(`/api/log/${type}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
}

function enqueue<T>(arr: T[], item: T, maxSize: number = 10) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = item;
    if (arr.length > maxSize)
        arr.length = maxSize;
    return arr;
}

export function logsView(): ReactViewResult {
    var arr = [];
    var view$ = logs.pipe(
        map(error => enqueue(arr, { id: new Date().getTime(), ...error }, 100)),
        startWith([]),
        map(create),
        map(v => views.section("Logs", v))
    );

    return new ReactViewResult(view$)
        .route("test", testView);
}

export function testView(): ReactViewResult {
    return new ReactViewResult(views.section("test", views.message("test de test")))
        .route("dd", ddView);
}

export function ddView() {
    return views.section("dd", views.message("dd"));
}

if (window.navigator.onLine) {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/loggerHub")
        .build();

    var logs = new Rx.Subject<IClientError>();
    connection.on("serverError", (error) => { logs.next(error); });
    connection.on("serverDebug", (message) => { console.log(message); });

    connection.start().catch(err => console.error(err.toString()));
}
