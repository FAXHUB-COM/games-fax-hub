const CACHE="games-fax-hub-v29";
const SHELL=["./","./index.html","./about.html","./site/styles.css","./site/app.js","./games/registry.json","./assets/favicon.svg","./assets/icon-192.png","./assets/icon-512.png","./assets/apple-touch-icon.png","./assets/favicon-32.png"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(SHELL);await self.skipWaiting();})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})()));
self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET")return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  // HTML navigations: network first so deployments update immediately, cache as offline fallback.
  if(request.mode==="navigate"){
    event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok)(await caches.open(CACHE)).put(request,response.clone());return response;}catch(_){return (await caches.match(request))||(await caches.match("./index.html"));}})());
    return;
  }
  // Game files: cache first for instant repeat launches, refresh in the background.
  if(url.pathname.includes("/games/")){
    event.respondWith((async()=>{const cached=await caches.match(request);const refresh=fetch(request).then(async response=>{if(response.ok)(await caches.open(CACHE)).put(request,response.clone());return response;}).catch(()=>null);if(cached){event.waitUntil(refresh);return cached;}return (await refresh)||Response.error();})());
    return;
  }
  // App shell and static assets: cache first, update cache after the response.
  event.respondWith((async()=>{const cached=await caches.match(request);if(cached){event.waitUntil(fetch(request).then(async response=>{if(response.ok)(await caches.open(CACHE)).put(request,response.clone());}).catch(()=>{}));return cached;}try{const response=await fetch(request);if(response.ok)(await caches.open(CACHE)).put(request,response.clone());return response;}catch(_){return Response.error();}})());
});
