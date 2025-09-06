
const CACHE = 'worktime-cache-v1';
const FILES = ['./','./index.html','./styles.css','./script.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable.png','./icons/icon-mono.png'];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))); self.skipWaiting();});
self.addEventListener('activate', e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch', e=>{ if(e.request.mode==='navigate'){ e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html'))); return;} e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>{}))); });
