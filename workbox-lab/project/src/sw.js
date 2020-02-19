importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Workbox loaded`);
  workbox.precaching.precacheAndRoute([]);
} else {
  console.log("Workbox didn't load");
}
