﻿// ReSharper disable Html.EventNotResolved
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    './',
    'css/xania.min.css'
];

let sw = self as any as ServiceWorkerGlobalScope;

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", (event: ExtendableEvent) => {
    event.waitUntil(caches.open(PRECACHE)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(sw.skipWaiting));
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event: ExtendableEvent) => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => sw.clients.claim())
    );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", (event: FetchEvent) => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request).then(networkResponse => {
                    if (isStaticFile(event.request)) {
                        return caches.open(RUNTIME).then(cache => {
                            // Put a copy of the response in the runtime cache.
                            return cache.put(event.request, networkResponse.clone()).then(() => {
                                return networkResponse;
                            });
                        });
                    } else {
                        return networkResponse;
                    }
                });
            })
        );
    }
});

function isStaticFile(request: Request) {
    return request
        && request.method === "GET"
        && /\.(js|png|jpg|jpeg|svg|html|css|ttf|ico)(\?.*)?$/i.test(request.url);
}
// ReSharper restore Html.EventNotResolved