System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  warnings: true,

  depCache: {
    "vendor.js": [
      "react-dom",
      "rxjs",
      "rxjs/operators",
      "@coreui/coreui",
      "tslib",
      "@aspnet/signalr"
    ],
    "npm:react-dom@16.4.1.js": [
      "npm:react-dom@16.4.1/index.js"
    ],
    "npm:rxjs@6.2.1.js": [
      "npm:rxjs@6.2.1/index.js"
    ],
    "npm:rxjs@6.2.1/operators.js": [
      "./operators/index"
    ],
    "npm:tslib@1.9.3.js": [
      "npm:tslib@1.9.3/tslib.js"
    ],
    "npm:@coreui/coreui@2.0.6.js": [
      "npm:@coreui/coreui@2.0.6/dist/js/coreui.js"
    ],
    "npm:@aspnet/signalr@1.0.2.js": [
      "npm:@aspnet/signalr@1.0.2/dist/cjs/index.js"
    ],
    "npm:react-dom@16.4.1/index.js": [
      "./cjs/react-dom.production.min",
      "./cjs/react-dom.development",
      "process"
    ],
    "npm:rxjs@6.2.1/index.js": [
      "./internal/Observable",
      "./internal/observable/ConnectableObservable",
      "./internal/operators/groupBy",
      "./internal/symbol/observable",
      "./internal/Subject",
      "./internal/BehaviorSubject",
      "./internal/ReplaySubject",
      "./internal/AsyncSubject",
      "./internal/scheduler/asap",
      "./internal/scheduler/async",
      "./internal/scheduler/queue",
      "./internal/scheduler/animationFrame",
      "./internal/scheduler/VirtualTimeScheduler",
      "./internal/Scheduler",
      "./internal/Subscription",
      "./internal/Subscriber",
      "./internal/Notification",
      "./internal/util/pipe",
      "./internal/util/noop",
      "./internal/util/identity",
      "./internal/util/isObservable",
      "./internal/util/ArgumentOutOfRangeError",
      "./internal/util/EmptyError",
      "./internal/util/ObjectUnsubscribedError",
      "./internal/util/UnsubscriptionError",
      "./internal/util/TimeoutError",
      "./internal/observable/bindCallback",
      "./internal/observable/bindNodeCallback",
      "./internal/observable/combineLatest",
      "./internal/observable/concat",
      "./internal/observable/defer",
      "./internal/observable/empty",
      "./internal/observable/forkJoin",
      "./internal/observable/from",
      "./internal/observable/fromEvent",
      "./internal/observable/fromEventPattern",
      "./internal/observable/generate",
      "./internal/observable/iif",
      "./internal/observable/interval",
      "./internal/observable/merge",
      "./internal/observable/never",
      "./internal/observable/of",
      "./internal/observable/onErrorResumeNext",
      "./internal/observable/pairs",
      "./internal/observable/race",
      "./internal/observable/range",
      "./internal/observable/throwError",
      "./internal/observable/timer",
      "./internal/observable/using",
      "./internal/observable/zip",
      "./internal/config"
    ],
    "npm:rxjs@6.2.1/operators/index.js": [
      "../internal/operators/audit",
      "../internal/operators/auditTime",
      "../internal/operators/buffer",
      "../internal/operators/bufferCount",
      "../internal/operators/bufferTime",
      "../internal/operators/bufferToggle",
      "../internal/operators/bufferWhen",
      "../internal/operators/catchError",
      "../internal/operators/combineAll",
      "../internal/operators/combineLatest",
      "../internal/operators/concat",
      "../internal/operators/concatAll",
      "../internal/operators/concatMap",
      "../internal/operators/concatMapTo",
      "../internal/operators/count",
      "../internal/operators/debounce",
      "../internal/operators/debounceTime",
      "../internal/operators/defaultIfEmpty",
      "../internal/operators/delay",
      "../internal/operators/delayWhen",
      "../internal/operators/dematerialize",
      "../internal/operators/distinct",
      "../internal/operators/distinctUntilChanged",
      "../internal/operators/distinctUntilKeyChanged",
      "../internal/operators/elementAt",
      "../internal/operators/endWith",
      "../internal/operators/every",
      "../internal/operators/exhaust",
      "../internal/operators/exhaustMap",
      "../internal/operators/expand",
      "../internal/operators/filter",
      "../internal/operators/finalize",
      "../internal/operators/find",
      "../internal/operators/findIndex",
      "../internal/operators/first",
      "../internal/operators/groupBy",
      "../internal/operators/ignoreElements",
      "../internal/operators/isEmpty",
      "../internal/operators/last",
      "../internal/operators/map",
      "../internal/operators/mapTo",
      "../internal/operators/materialize",
      "../internal/operators/max",
      "../internal/operators/merge",
      "../internal/operators/mergeAll",
      "../internal/operators/mergeMap",
      "../internal/operators/mergeMapTo",
      "../internal/operators/mergeScan",
      "../internal/operators/min",
      "../internal/operators/multicast",
      "../internal/operators/observeOn",
      "../internal/operators/onErrorResumeNext",
      "../internal/operators/pairwise",
      "../internal/operators/partition",
      "../internal/operators/pluck",
      "../internal/operators/publish",
      "../internal/operators/publishBehavior",
      "../internal/operators/publishLast",
      "../internal/operators/publishReplay",
      "../internal/operators/race",
      "../internal/operators/reduce",
      "../internal/operators/repeat",
      "../internal/operators/repeatWhen",
      "../internal/operators/retry",
      "../internal/operators/retryWhen",
      "../internal/operators/refCount",
      "../internal/operators/sample",
      "../internal/operators/sampleTime",
      "../internal/operators/scan",
      "../internal/operators/sequenceEqual",
      "../internal/operators/share",
      "../internal/operators/shareReplay",
      "../internal/operators/single",
      "../internal/operators/skip",
      "../internal/operators/skipLast",
      "../internal/operators/skipUntil",
      "../internal/operators/skipWhile",
      "../internal/operators/startWith",
      "../internal/operators/subscribeOn",
      "../internal/operators/switchAll",
      "../internal/operators/switchMap",
      "../internal/operators/switchMapTo",
      "../internal/operators/take",
      "../internal/operators/takeLast",
      "../internal/operators/takeUntil",
      "../internal/operators/takeWhile",
      "../internal/operators/tap",
      "../internal/operators/throttle",
      "../internal/operators/throttleTime",
      "../internal/operators/throwIfEmpty",
      "../internal/operators/timeInterval",
      "../internal/operators/timeout",
      "../internal/operators/timeoutWith",
      "../internal/operators/timestamp",
      "../internal/operators/toArray",
      "../internal/operators/window",
      "../internal/operators/windowCount",
      "../internal/operators/windowTime",
      "../internal/operators/windowToggle",
      "../internal/operators/windowWhen",
      "../internal/operators/withLatestFrom",
      "../internal/operators/zip",
      "../internal/operators/zipAll"
    ],
    "npm:@coreui/coreui@2.0.6/dist/js/coreui.js": [
      "jquery",
      "perfect-scrollbar"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/index.js": [
      "./Errors",
      "./HttpClient",
      "./HubConnection",
      "./HubConnectionBuilder",
      "./IHubProtocol",
      "./ILogger",
      "./ITransport",
      "./Loggers",
      "./JsonHubProtocol"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:rxjs@6.2.1/internal/operators/groupBy.js": [
      "../Subscriber",
      "../Subscription",
      "../Observable",
      "../Subject"
    ],
    "npm:rxjs@6.2.1/internal/Observable.js": [
      "./util/toSubscriber",
      "./symbol/observable",
      "./util/pipe",
      "./config"
    ],
    "npm:rxjs@6.2.1/internal/observable/ConnectableObservable.js": [
      "../Subject",
      "../Observable",
      "../Subscriber",
      "../Subscription",
      "../operators/refCount"
    ],
    "npm:rxjs@6.2.1/internal/Subject.js": [
      "./Observable",
      "./Subscriber",
      "./Subscription",
      "./util/ObjectUnsubscribedError",
      "./SubjectSubscription",
      "./symbol/rxSubscriber"
    ],
    "npm:rxjs@6.2.1/internal/ReplaySubject.js": [
      "./Subject",
      "./scheduler/queue",
      "./Subscription",
      "./operators/observeOn",
      "./util/ObjectUnsubscribedError",
      "./SubjectSubscription"
    ],
    "npm:rxjs@6.2.1/internal/BehaviorSubject.js": [
      "./Subject",
      "./util/ObjectUnsubscribedError"
    ],
    "npm:rxjs@6.2.1/internal/AsyncSubject.js": [
      "./Subject",
      "./Subscription"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/asap.js": [
      "./AsapAction",
      "./AsapScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/queue.js": [
      "./QueueAction",
      "./QueueScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/VirtualTimeScheduler.js": [
      "./AsyncAction",
      "./AsyncScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/async.js": [
      "./AsyncAction",
      "./AsyncScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/animationFrame.js": [
      "./AnimationFrameAction",
      "./AnimationFrameScheduler"
    ],
    "npm:rxjs@6.2.1/internal/Notification.js": [
      "./observable/empty",
      "./observable/of",
      "./observable/throwError"
    ],
    "npm:rxjs@6.2.1/internal/Subscription.js": [
      "./util/isArray",
      "./util/isObject",
      "./util/isFunction",
      "./util/tryCatch",
      "./util/errorObject",
      "./util/UnsubscriptionError"
    ],
    "npm:rxjs@6.2.1/internal/Subscriber.js": [
      "./util/isFunction",
      "./Observer",
      "./Subscription",
      "./symbol/rxSubscriber",
      "./config",
      "./util/hostReportError"
    ],
    "npm:rxjs@6.2.1/internal/util/pipe.js": [
      "./noop"
    ],
    "npm:rxjs@6.2.1/internal/util/isObservable.js": [
      "../Observable"
    ],
    "npm:rxjs@6.2.1/internal/observable/combineLatest.js": [
      "../util/isScheduler",
      "../util/isArray",
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "./fromArray"
    ],
    "npm:rxjs@6.2.1/internal/observable/bindCallback.js": [
      "../Observable",
      "../AsyncSubject",
      "../operators/map",
      "../util/isArray",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/observable/concat.js": [
      "../util/isScheduler",
      "./of",
      "./from",
      "../operators/concatAll"
    ],
    "npm:rxjs@6.2.1/internal/observable/bindNodeCallback.js": [
      "../Observable",
      "../AsyncSubject",
      "../operators/map",
      "../util/isScheduler",
      "../util/isArray"
    ],
    "npm:rxjs@6.2.1/internal/observable/defer.js": [
      "../Observable",
      "./from",
      "./empty"
    ],
    "npm:rxjs@6.2.1/internal/observable/forkJoin.js": [
      "../Observable",
      "../util/isArray",
      "./empty",
      "../util/subscribeToResult",
      "../OuterSubscriber",
      "../operators/map"
    ],
    "npm:rxjs@6.2.1/internal/observable/from.js": [
      "../Observable",
      "../util/isPromise",
      "../util/isArrayLike",
      "../util/isInteropObservable",
      "../util/isIterable",
      "./fromArray",
      "./fromPromise",
      "./fromIterable",
      "./fromObservable",
      "../util/subscribeTo"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromEvent.js": [
      "../Observable",
      "../util/isArray",
      "../util/isFunction",
      "../operators/map"
    ],
    "npm:rxjs@6.2.1/internal/observable/generate.js": [
      "../Observable",
      "../util/identity",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/observable/empty.js": [
      "../Observable"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromEventPattern.js": [
      "../Observable",
      "../util/isArray",
      "../util/isFunction",
      "../operators/map"
    ],
    "npm:rxjs@6.2.1/internal/observable/iif.js": [
      "./defer",
      "./empty"
    ],
    "npm:rxjs@6.2.1/internal/observable/interval.js": [
      "../Observable",
      "../scheduler/async",
      "../util/isNumeric"
    ],
    "npm:rxjs@6.2.1/internal/observable/of.js": [
      "../util/isScheduler",
      "./fromArray",
      "./empty",
      "./scalar"
    ],
    "npm:rxjs@6.2.1/internal/observable/merge.js": [
      "../Observable",
      "../util/isScheduler",
      "../operators/mergeAll",
      "./fromArray"
    ],
    "npm:rxjs@6.2.1/internal/observable/never.js": [
      "../Observable",
      "../util/noop"
    ],
    "npm:rxjs@6.2.1/internal/observable/pairs.js": [
      "../Observable",
      "../Subscription"
    ],
    "npm:rxjs@6.2.1/internal/observable/onErrorResumeNext.js": [
      "../Observable",
      "./from",
      "../util/isArray",
      "./empty"
    ],
    "npm:rxjs@6.2.1/internal/observable/race.js": [
      "../util/isArray",
      "./fromArray",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/observable/range.js": [
      "../Observable"
    ],
    "npm:rxjs@6.2.1/internal/observable/using.js": [
      "../Observable",
      "./from",
      "./empty"
    ],
    "npm:rxjs@6.2.1/internal/observable/throwError.js": [
      "../Observable"
    ],
    "npm:rxjs@6.2.1/internal/observable/timer.js": [
      "../Observable",
      "../scheduler/async",
      "../util/isNumeric",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/operators/auditTime.js": [
      "../scheduler/async",
      "./audit",
      "../observable/timer"
    ],
    "npm:rxjs@6.2.1/internal/observable/zip.js": [
      "./fromArray",
      "../util/isArray",
      "../Subscriber",
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "../symbol/iterator"
    ],
    "npm:rxjs@6.2.1/internal/operators/audit.js": [
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/catchError.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/combineAll.js": [
      "../observable/combineLatest"
    ],
    "npm:rxjs@6.2.1/internal/operators/concat.js": [
      "../observable/concat"
    ],
    "npm:rxjs@6.2.1/internal/operators/concatAll.js": [
      "./mergeAll"
    ],
    "npm:rxjs@6.2.1/internal/operators/concatMapTo.js": [
      "./concatMap"
    ],
    "npm:rxjs@6.2.1/internal/operators/combineLatest.js": [
      "../util/isArray",
      "../observable/combineLatest",
      "../observable/from"
    ],
    "npm:rxjs@6.2.1/internal/operators/concatMap.js": [
      "./mergeMap"
    ],
    "npm:rxjs@6.2.1/internal/operators/count.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/defaultIfEmpty.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/debounce.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/debounceTime.js": [
      "../Subscriber",
      "../scheduler/async"
    ],
    "npm:rxjs@6.2.1/internal/operators/delay.js": [
      "../scheduler/async",
      "../util/isDate",
      "../Subscriber",
      "../Notification"
    ],
    "npm:rxjs@6.2.1/internal/operators/delayWhen.js": [
      "../Subscriber",
      "../Observable",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/distinct.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/dematerialize.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/elementAt.js": [
      "../util/ArgumentOutOfRangeError",
      "./filter",
      "./throwIfEmpty",
      "./defaultIfEmpty",
      "./take"
    ],
    "npm:rxjs@6.2.1/internal/operators/distinctUntilChanged.js": [
      "../Subscriber",
      "../util/tryCatch",
      "../util/errorObject"
    ],
    "npm:rxjs@6.2.1/internal/operators/exhaust.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/distinctUntilKeyChanged.js": [
      "./distinctUntilChanged"
    ],
    "npm:rxjs@6.2.1/internal/operators/every.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/endWith.js": [
      "../observable/fromArray",
      "../observable/scalar",
      "../observable/empty",
      "../observable/concat",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/operators/exhaustMap.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "./map",
      "../observable/from"
    ],
    "npm:rxjs@6.2.1/internal/operators/finalize.js": [
      "../Subscriber",
      "../Subscription"
    ],
    "npm:rxjs@6.2.1/internal/operators/expand.js": [
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/filter.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/findIndex.js": [
      "./find"
    ],
    "npm:rxjs@6.2.1/internal/operators/find.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/map.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/first.js": [
      "../util/EmptyError",
      "./filter",
      "./take",
      "./defaultIfEmpty",
      "./throwIfEmpty",
      "../util/identity"
    ],
    "npm:rxjs@6.2.1/internal/operators/last.js": [
      "../util/EmptyError",
      "./filter",
      "./takeLast",
      "./throwIfEmpty",
      "./defaultIfEmpty",
      "../util/identity"
    ],
    "npm:rxjs@6.2.1/internal/operators/isEmpty.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/ignoreElements.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/mapTo.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/max.js": [
      "./reduce"
    ],
    "npm:rxjs@6.2.1/internal/operators/materialize.js": [
      "../Subscriber",
      "../Notification"
    ],
    "npm:rxjs@6.2.1/internal/operators/mergeMap.js": [
      "../util/subscribeToResult",
      "../OuterSubscriber",
      "./map",
      "../observable/from"
    ],
    "npm:rxjs@6.2.1/internal/operators/mergeMapTo.js": [
      "./mergeMap"
    ],
    "npm:rxjs@6.2.1/internal/operators/merge.js": [
      "../observable/merge"
    ],
    "npm:rxjs@6.2.1/internal/operators/mergeAll.js": [
      "./mergeMap",
      "../util/identity"
    ],
    "npm:rxjs@6.2.1/internal/operators/min.js": [
      "./reduce"
    ],
    "npm:rxjs@6.2.1/internal/operators/mergeScan.js": [
      "../util/tryCatch",
      "../util/errorObject",
      "../util/subscribeToResult",
      "../OuterSubscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/multicast.js": [
      "../observable/ConnectableObservable"
    ],
    "npm:rxjs@6.2.1/internal/operators/observeOn.js": [
      "../Subscriber",
      "../Notification"
    ],
    "npm:rxjs@6.2.1/internal/operators/partition.js": [
      "../util/not",
      "./filter"
    ],
    "npm:rxjs@6.2.1/internal/operators/onErrorResumeNext.js": [
      "../observable/from",
      "../util/isArray",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/publishBehavior.js": [
      "../BehaviorSubject",
      "./multicast"
    ],
    "npm:rxjs@6.2.1/internal/operators/pairwise.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/pluck.js": [
      "./map"
    ],
    "npm:rxjs@6.2.1/internal/operators/publishLast.js": [
      "../AsyncSubject",
      "./multicast"
    ],
    "npm:rxjs@6.2.1/internal/operators/publishReplay.js": [
      "../ReplaySubject",
      "./multicast"
    ],
    "npm:rxjs@6.2.1/internal/operators/publish.js": [
      "../Subject",
      "./multicast"
    ],
    "npm:rxjs@6.2.1/internal/operators/race.js": [
      "../util/isArray",
      "../observable/race"
    ],
    "npm:rxjs@6.2.1/internal/operators/reduce.js": [
      "./scan",
      "./takeLast",
      "./defaultIfEmpty",
      "../util/pipe"
    ],
    "npm:rxjs@6.2.1/internal/operators/retry.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/refCount.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/repeat.js": [
      "../Subscriber",
      "../observable/empty"
    ],
    "npm:rxjs@6.2.1/internal/operators/repeatWhen.js": [
      "../Subject",
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/retryWhen.js": [
      "../Subject",
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/sample.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/sampleTime.js": [
      "../Subscriber",
      "../scheduler/async"
    ],
    "npm:rxjs@6.2.1/internal/operators/sequenceEqual.js": [
      "../Subscriber",
      "../util/tryCatch",
      "../util/errorObject"
    ],
    "npm:rxjs@6.2.1/internal/operators/scan.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/share.js": [
      "./multicast",
      "./refCount",
      "../Subject"
    ],
    "npm:rxjs@6.2.1/internal/operators/startWith.js": [
      "../observable/fromArray",
      "../observable/scalar",
      "../observable/empty",
      "../observable/concat",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/operators/shareReplay.js": [
      "../ReplaySubject"
    ],
    "npm:rxjs@6.2.1/internal/operators/single.js": [
      "../Subscriber",
      "../util/EmptyError"
    ],
    "npm:rxjs@6.2.1/internal/operators/skipUntil.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/skip.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/switchAll.js": [
      "./switchMap",
      "../util/identity"
    ],
    "npm:rxjs@6.2.1/internal/operators/skipLast.js": [
      "../Subscriber",
      "../util/ArgumentOutOfRangeError"
    ],
    "npm:rxjs@6.2.1/internal/operators/skipWhile.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/subscribeOn.js": [
      "../observable/SubscribeOnObservable"
    ],
    "npm:rxjs@6.2.1/internal/operators/take.js": [
      "../Subscriber",
      "../util/ArgumentOutOfRangeError",
      "../observable/empty"
    ],
    "npm:rxjs@6.2.1/internal/operators/switchMapTo.js": [
      "./switchMap"
    ],
    "npm:rxjs@6.2.1/internal/operators/switchMap.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "./map",
      "../observable/from"
    ],
    "npm:rxjs@6.2.1/internal/operators/takeLast.js": [
      "../Subscriber",
      "../util/ArgumentOutOfRangeError",
      "../observable/empty"
    ],
    "npm:rxjs@6.2.1/internal/operators/takeUntil.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/throttle.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/tap.js": [
      "../Subscriber",
      "../util/noop",
      "../util/isFunction"
    ],
    "npm:rxjs@6.2.1/internal/operators/throttleTime.js": [
      "../Subscriber",
      "../scheduler/async",
      "./throttle"
    ],
    "npm:rxjs@6.2.1/internal/operators/throwIfEmpty.js": [
      "./tap",
      "../util/EmptyError"
    ],
    "npm:rxjs@6.2.1/internal/operators/timestamp.js": [
      "../scheduler/async",
      "./map"
    ],
    "npm:rxjs@6.2.1/internal/operators/timeout.js": [
      "../scheduler/async",
      "../util/TimeoutError",
      "./timeoutWith",
      "../observable/throwError"
    ],
    "npm:rxjs@6.2.1/internal/operators/takeWhile.js": [
      "../Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/operators/timeInterval.js": [
      "../scheduler/async",
      "./scan",
      "../observable/defer",
      "./map"
    ],
    "npm:rxjs@6.2.1/internal/operators/timeoutWith.js": [
      "../scheduler/async",
      "../util/isDate",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/toArray.js": [
      "./reduce"
    ],
    "npm:rxjs@6.2.1/internal/operators/windowCount.js": [
      "../Subscriber",
      "../Subject"
    ],
    "npm:rxjs@6.2.1/internal/operators/window.js": [
      "../Subject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/withLatestFrom.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/windowToggle.js": [
      "../Subject",
      "../Subscription",
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/zip.js": [
      "../observable/zip"
    ],
    "npm:rxjs@6.2.1/internal/operators/windowTime.js": [
      "../Subject",
      "../scheduler/async",
      "../Subscriber",
      "../util/isNumeric",
      "../util/isScheduler"
    ],
    "npm:rxjs@6.2.1/internal/operators/windowWhen.js": [
      "../Subject",
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult"
    ],
    "npm:rxjs@6.2.1/internal/operators/zipAll.js": [
      "../observable/zip"
    ],
    "npm:rxjs@6.2.1/internal/operators/bufferCount.js": [
      "../Subscriber",
      "buffer"
    ],
    "npm:rxjs@6.2.1/internal/operators/buffer.js": [
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "buffer"
    ],
    "npm:rxjs@6.2.1/internal/operators/bufferTime.js": [
      "../scheduler/async",
      "../Subscriber",
      "../util/isScheduler",
      "buffer"
    ],
    "npm:rxjs@6.2.1/internal/operators/bufferToggle.js": [
      "../Subscription",
      "../util/subscribeToResult",
      "../OuterSubscriber",
      "buffer"
    ],
    "npm:rxjs@6.2.1/internal/operators/bufferWhen.js": [
      "../Subscription",
      "../util/tryCatch",
      "../util/errorObject",
      "../OuterSubscriber",
      "../util/subscribeToResult",
      "buffer"
    ],
    "npm:perfect-scrollbar@1.4.0.js": [
      "npm:perfect-scrollbar@1.4.0/dist/perfect-scrollbar.common.js"
    ],
    "npm:jquery@3.3.1.js": [
      "npm:jquery@3.3.1/dist/jquery.js"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/Errors.js": [
      "tslib"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/HttpClient.js": [
      "tslib",
      "./Errors",
      "./ILogger"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/HubConnectionBuilder.js": [
      "./HttpConnection",
      "./HubConnection",
      "./JsonHubProtocol",
      "./Loggers",
      "./Utils"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/JsonHubProtocol.js": [
      "./IHubProtocol",
      "./ILogger",
      "./ITransport",
      "./Loggers",
      "./TextMessageFormat"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/HubConnection.js": [
      "tslib",
      "./HandshakeProtocol",
      "./IHubProtocol",
      "./ILogger",
      "./Utils",
      "process"
    ],
    "npm:rxjs@6.2.1/internal/SubjectSubscription.js": [
      "./Subscription"
    ],
    "npm:rxjs@6.2.1/internal/util/toSubscriber.js": [
      "../Subscriber",
      "../symbol/rxSubscriber",
      "../Observer"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AsapScheduler.js": [
      "./AsyncScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AsapAction.js": [
      "../util/Immediate",
      "./AsyncAction"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/QueueAction.js": [
      "./AsyncAction"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/QueueScheduler.js": [
      "./AsyncScheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AsyncAction.js": [
      "./Action"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AsyncScheduler.js": [
      "../Scheduler"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AnimationFrameAction.js": [
      "./AsyncAction"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/AnimationFrameScheduler.js": [
      "./AsyncScheduler"
    ],
    "npm:rxjs@6.2.1/internal/util/tryCatch.js": [
      "./errorObject"
    ],
    "npm:rxjs@6.2.1/internal/Observer.js": [
      "./config",
      "./util/hostReportError"
    ],
    "npm:rxjs@6.2.1/internal/OuterSubscriber.js": [
      "./Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/util/subscribeToResult.js": [
      "../InnerSubscriber",
      "./subscribeTo"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromArray.js": [
      "../Observable",
      "../Subscription",
      "../util/subscribeToArray"
    ],
    "npm:rxjs@6.2.1/internal/util/isInteropObservable.js": [
      "../symbol/observable"
    ],
    "npm:rxjs@6.2.1/internal/util/isIterable.js": [
      "../symbol/iterator"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromPromise.js": [
      "../Observable",
      "../Subscription",
      "../util/subscribeToPromise"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromIterable.js": [
      "../Observable",
      "../Subscription",
      "../symbol/iterator",
      "../util/subscribeToIterable"
    ],
    "npm:rxjs@6.2.1/internal/observable/fromObservable.js": [
      "../Observable",
      "../Subscription",
      "../symbol/observable",
      "../util/subscribeToObservable"
    ],
    "npm:rxjs@6.2.1/internal/util/subscribeTo.js": [
      "../Observable",
      "./subscribeToArray",
      "./subscribeToPromise",
      "./subscribeToIterable",
      "./subscribeToObservable",
      "./isArrayLike",
      "./isPromise",
      "./isObject",
      "../symbol/iterator",
      "../symbol/observable"
    ],
    "npm:rxjs@6.2.1/internal/util/isNumeric.js": [
      "./isArray"
    ],
    "npm:rxjs@6.2.1/internal/observable/scalar.js": [
      "../Observable"
    ],
    "github:jspm/nodelibs-buffer@0.1.1.js": [
      "github:jspm/nodelibs-buffer@0.1.1/index"
    ],
    "npm:rxjs@6.2.1/internal/observable/SubscribeOnObservable.js": [
      "../Observable",
      "../scheduler/asap",
      "../util/isNumeric"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:react-dom@16.4.1/cjs/react-dom.production.min.js": [
      "fbjs/lib/invariant",
      "react",
      "fbjs/lib/ExecutionEnvironment",
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/getActiveElement",
      "fbjs/lib/shallowEqual",
      "fbjs/lib/containsNode",
      "fbjs/lib/emptyObject"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/Utils.js": [
      "tslib",
      "./ILogger",
      "./Loggers"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/HandshakeProtocol.js": [
      "./TextMessageFormat"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/HttpConnection.js": [
      "tslib",
      "./HttpClient",
      "./ILogger",
      "./ITransport",
      "./LongPollingTransport",
      "./ServerSentEventsTransport",
      "./Utils",
      "./WebSocketTransport"
    ],
    "npm:rxjs@6.2.1/internal/scheduler/Action.js": [
      "../Subscription"
    ],
    "npm:rxjs@6.2.1/internal/InnerSubscriber.js": [
      "./Subscriber"
    ],
    "npm:rxjs@6.2.1/internal/util/subscribeToPromise.js": [
      "./hostReportError"
    ],
    "npm:rxjs@6.2.1/internal/util/subscribeToIterable.js": [
      "../symbol/iterator"
    ],
    "npm:rxjs@6.2.1/internal/util/subscribeToObservable.js": [
      "../symbol/observable"
    ],
    "npm:process@0.11.10.js": [
      "npm:process@0.11.10/browser.js"
    ],
    "github:jspm/nodelibs-buffer@0.1.1/index.js": [
      "buffer"
    ],
    "npm:object-assign@4.1.1.js": [
      "npm:object-assign@4.1.1/index"
    ],
    "npm:react@16.4.1.js": [
      "npm:react@16.4.1/index.js"
    ],
    "npm:fbjs@0.8.17/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.17/lib/invariant.js": [
      "process"
    ],
    "npm:fbjs@0.8.17/lib/emptyObject.js": [
      "process"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/WebSocketTransport.js": [
      "tslib",
      "./ILogger",
      "./ITransport",
      "./Utils"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/ServerSentEventsTransport.js": [
      "tslib",
      "./ILogger",
      "./ITransport",
      "./Utils"
    ],
    "npm:@aspnet/signalr@1.0.2/dist/cjs/LongPollingTransport.js": [
      "tslib",
      "./AbortController",
      "./Errors",
      "./ILogger",
      "./ITransport",
      "./Utils"
    ],
    "npm:buffer@5.2.1.js": [
      "npm:buffer@5.2.1/index.js"
    ],
    "npm:fbjs@0.8.17/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:react@16.4.1/index.js": [
      "./cjs/react.production.min",
      "./cjs/react.development",
      "process"
    ],
    "npm:react@16.4.1/cjs/react.production.min.js": [
      "object-assign",
      "fbjs/lib/invariant",
      "fbjs/lib/emptyObject",
      "fbjs/lib/emptyFunction"
    ],
    "npm:buffer@5.2.1/index.js": [
      "base64-js",
      "ieee754"
    ],
    "npm:react@16.4.1/cjs/react.development.js": [
      "object-assign",
      "fbjs/lib/invariant",
      "fbjs/lib/emptyObject",
      "fbjs/lib/warning",
      "fbjs/lib/emptyFunction",
      "prop-types/checkPropTypes",
      "process"
    ],
    "npm:ieee754@1.1.12.js": [
      "npm:ieee754@1.1.12/index.js"
    ],
    "npm:base64-js@1.3.0.js": [
      "npm:base64-js@1.3.0/index.js"
    ],
    "npm:fbjs@0.8.17/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:prop-types@15.6.2/checkPropTypes.js": [
      "./lib/ReactPropTypesSecret",
      "process"
    ],
    "npm:react-dom@16.4.1/cjs/react-dom.development.js": [
      "fbjs/lib/invariant",
      "react",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "object-assign",
      "fbjs/lib/emptyFunction",
      "prop-types/checkPropTypes",
      "fbjs/lib/getActiveElement",
      "fbjs/lib/shallowEqual",
      "fbjs/lib/containsNode",
      "fbjs/lib/emptyObject",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/camelizeStyleName",
      "process"
    ],
    "npm:fbjs@0.8.17/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:fbjs@0.8.17/lib/camelizeStyleName.js": [
      "./camelize"
    ]
  },

  map: {
    "@aspnet/signalr": "npm:@aspnet/signalr@1.0.3",
    "@coreui/coreui": "npm:@coreui/coreui@2.0.6",
    "@coreui/coreui@2.0.6": "npm:@coreui/coreui@2.0.6",
    "@coreui/icons": "npm:@coreui/icons@0.3.0",
    "izitoast": "npm:izitoast@1.4.0",
    "jquery": "npm:jquery@3.3.1",
    "react": "npm:react@16.5.2",
    "react-dom": "npm:react-dom@16.5.2",
    "rxjs": "npm:rxjs@6.3.2",
    "tslib": "npm:tslib@1.9.3",
    "typescript": "npm:typescript@2.9.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@aspnet/signalr@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@coreui/coreui-plugin-npm-postinstall@1.0.2": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:@coreui/coreui@2.0.6": {
      "@coreui/coreui-plugin-npm-postinstall": "npm:@coreui/coreui-plugin-npm-postinstall@1.0.2",
      "bootstrap": "npm:bootstrap@4.1.3",
      "jquery": "npm:jquery@3.3.1",
      "perfect-scrollbar": "npm:perfect-scrollbar@1.4.0",
      "popper.js": "npm:popper.js@1.14.4"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:bootstrap@4.1.3": {
      "jquery": "npm:jquery@3.3.1",
      "tether": "github:HubSpot/tether@1.4.4"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-from@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.1"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "md5.js": "npm:md5.js@1.3.4",
      "ripemd160": "npm:ripemd160@2.0.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.3",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.16",
      "public-encrypt": "npm:public-encrypt@4.0.2",
      "randombytes": "npm:randombytes@2.0.6",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.0.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.4.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.5",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.4",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.5": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.5",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:loose-envify@1.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@4.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:md5.js@1.3.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.1.1": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.16",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.16": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.2",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "sha.js": "npm:sha.js@2.4.11"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:prop-types@15.6.2": {
      "loose-envify": "npm:loose-envify@1.4.0",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.1",
      "randombytes": "npm:randombytes@2.0.6"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.0.6",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:react-dom@16.5.2": {
      "loose-envify": "npm:loose-envify@1.4.0",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2",
      "react": "npm:react@16.5.2",
      "schedule": "npm:schedule@0.5.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:react@16.5.2": {
      "loose-envify": "npm:loose-envify@1.4.0",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.6.2",
      "schedule": "npm:schedule@0.5.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:rxjs@6.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "tslib": "npm:tslib@1.9.3"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:schedule@0.5.0": {
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:source-map-support@0.5.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-from": "npm:buffer-from@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.6.1"
    },
    "npm:source-map@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:typescript@2.9.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "source-map-support": "npm:source-map-support@0.5.9"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
