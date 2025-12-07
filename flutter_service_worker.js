'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "67f1415917b29a1de1eea12b6a78d65b",
"assets/AssetManifest.bin.json": "c1c8aa487f71144e40c1e3f10a3f1a43",
"assets/AssetManifest.json": "8ae56f37189b35cc97edc93424bf7022",
"assets/assets/onboard/empty.png": "580479ee2d10691b1ab63ef959487b2e",
"assets/assets/onboard/emptyy.png": "835ef7d0b47adaeb248675e341514a75",
"assets/assets/onboard/img.png": "213b6aee70d5295b8098528b87b71b3d",
"assets/assets/onboard/lottie1.json": "a09277a2dac7dad80bf8d01b839ed3e3",
"assets/assets/onboard/lottie2.json": "01cdc6f4e76e6bcdcf67e58a79370c87",
"assets/assets/onboard/lottie3.json": "e6a3b5b45e5f0c8e166535fe7d6a5b86",
"assets/assets/onboard/lottie4.json": "e5cd728d25f94b0c2e6b1d8c616f1ecc",
"assets/assets/onboard/test.png": "43425b632f1380ccb73b60cb235d6b6e",
"assets/assets/onboard/unlock.json": "27ea197ec76fa7f12b21146676a85a57",
"assets/assets/onboard/victory.json": "06363136e1a81639b8ae12789528088c",
"assets/assets/rives/achieve.json": "0704245c8ae47ce74e58697f6c0b8e34",
"assets/assets/rives/denied.json": "8a911c86650d8ba6965b64a6e841c540",
"assets/assets/rives/pro.json": "64f3d0b9b40eb7fe287f08078920971e",
"assets/assets/rives/Star.json": "e81982ae41a0f8aeffa7318c8d6794ee",
"assets/assets/rives/streak.json": "df88096d884d63f2bb755c5cfce8f929",
"assets/assets/rives/sub.json": "d463f0f38998a63238271a6a17f3a490",
"assets/assets/rives/tree_demo.riv": "a9af2b2603979182f7034631bcfe99ee",
"assets/assets/sounds/feedbacks/tap.mp3": "01e065716c551ca74c5c3b5280a6360e",
"assets/assets/sounds/feedbacks/toggle.mp3": "243c79fde6048db75389dfde768659d9",
"assets/assets/sounds/pomodoro/beep.mp3": "6c577591628f5437fbab26b57b0f5070",
"assets/assets/sounds/pomodoro/bicycle.mp3": "46680f393d0743a674ea099e2c3f8b47",
"assets/assets/sounds/pomodoro/gong.mp3": "ac9c1d6ed0cfada1ae6761be1c78056d",
"assets/assets/sounds/pomodoro/hotel.mp3": "b315702090d482a105954da8487b4176",
"assets/assets/sounds/pomodoro/knock.mp3": "918d50c023375f1684ab5e3175afa480",
"assets/assets/svg/appreance.svg": "193615fe05ddeb1e9314eb632fe2289d",
"assets/assets/svg/cancel.svg": "ef9b6e8b692bb90b71d7b1ac05861731",
"assets/assets/svg/chart.svg": "a4b55e6ea98d8feafefc3241fe19e009",
"assets/assets/svg/cloudd.svg": "59ba16d582b334e9fc0ca0d9458f765c",
"assets/assets/svg/csv.svg": "7353013db1605a33f45228b859e7aaa6",
"assets/assets/svg/download.svg": "df9fb63233863cbe9f8661e1556ed810",
"assets/assets/svg/downloaded.svg": "c285fd012517e3f0e2cb58fa9bfae295",
"assets/assets/svg/edit.svg": "f1d2a3932ae5977217326bd36a5edd21",
"assets/assets/svg/export.svg": "2b074ff0b3bc3b36da1fcbf301a13414",
"assets/assets/svg/json.svg": "22d1b808bb6c79f7779ac34735dc6465",
"assets/assets/svg/linkedin.svg": "5abc6e27b4d75ea44718e88fd4b4f1d0",
"assets/assets/svg/music.svg": "7424b9ffa319027cb0548513877e312f",
"assets/assets/svg/musicicon.svg": "7fba89a6459e2599a22961ac2ec8287c",
"assets/assets/svg/musics.svg": "9c54c9189c118c43fabe0cf94f81b91b",
"assets/assets/svg/nav/group.svg": "9c65ae6e526bad90fa1337f3b3ae335f",
"assets/assets/svg/nav/home.svg": "f06be32274c8e1e127b682a3481bf65f",
"assets/assets/svg/nav/setting.svg": "63a2c522011709eb7c6fc3a001841fe5",
"assets/assets/svg/nav/stat.svg": "e0a8f9933c89d7798380ca795a5fe241",
"assets/assets/svg/notification.svg": "63da4e1f1ba46ccdde839e63e20f6a6d",
"assets/assets/svg/pdf.svg": "acfd5b697e36e229a5eb3c8dca745eb4",
"assets/assets/svg/screenshot.svg": "06939a2fa6cf9f08fdc304f3a8ef489c",
"assets/assets/svg/setting.svg": "47cb9b035ffd7925ea4487696931327c",
"assets/assets/svg/share.svg": "880450c2ed5ddb075b718e1bfe09087c",
"assets/assets/svg/support.svg": "6db09c57099162638ee456677c087965",
"assets/assets/svg/tick.svg": "abc1077d39f4e79ebb8a1136f0fcebe4",
"assets/assets/svg/time.svg": "1cc86015d330157e01d18a403c0617a8",
"assets/assets/svg/web.svg": "6aafdbdb0895d085053901a8ec2c5015",
"assets/assets/svg/x-twitter.svg": "fc55df58b817d92605f28d5cd9b8a41e",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/fonts/MaterialIcons-Regular.otf": "8052db65c8e4bdf8d0ce2839b40199bb",
"assets/NOTICES": "fcc64d54b5b2ef61e32db05ce842aa44",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "65138abcc70c526bc311c7af01452d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2146840b7c26015cc59a6e832ab275a",
"/": "c2146840b7c26015cc59a6e832ab275a",
"main.dart.js": "1784a748da079ccd5e51ebfd4606783c",
"manifest.json": "0950851ac4a3855087c8dace75b581d7",
"version.json": "33fb362e0cfab06501fbe94ed1c405a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
