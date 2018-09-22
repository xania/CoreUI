/**
 * Add here the list of vendor dependencies, intended for production release optimization
 */
import "react-dom"
export { Observable } from "rxjs/internal/Observable";
export { Subject } from "rxjs/internal/Subject";
export { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
export * from 'rxjs/internal/types';
export { pipe } from 'rxjs/internal/util/pipe';
export { interval } from 'rxjs/internal/observable/interval';
export { of } from 'rxjs/internal/observable/of';
export { timer } from 'rxjs/internal/observable/timer';
export { merge } from 'rxjs/internal/observable/merge';
export { empty } from 'rxjs/internal/observable/empty';
export { isObservable } from 'rxjs/internal/util/isObservable';

export { map } from 'rxjs/internal/operators/map';
export { startWith } from "rxjs/internal/operators/startWith";
export { combineLatest } from "rxjs/internal/operators/combineLatest";
export { filter } from "rxjs/internal/operators/filter";
export { tap } from "rxjs/internal/operators/tap";
export { switchMap } from "rxjs/internal/operators/switchMap";
export { debounceTime } from "rxjs/internal/operators/debounceTime";
export { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
export { share } from "rxjs/internal/operators/share";
export { expand } from "rxjs/internal/operators/expand";
export { reduce } from "rxjs/internal/operators/reduce";

export { isPromise } from 'rxjs/internal/util/isPromise';
export { isInteropObservable } from 'rxjs/internal/util/isInteropObservable';
export { fromPromise } from 'rxjs/internal/observable/fromPromise';
export { fromObservable } from 'rxjs/internal/observable/fromObservable';

// import "rxjs/operators"
//import "@coreui/coreui"
//import "tslib"
//import "@aspnet/signalr"
