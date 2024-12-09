'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8ac6452943ecaedd27fa8d8bb3b0433e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9682b3f187cbeefbce526cd2ce4b25e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "748344f6ce1f67dd3a9b62e789b6bf2d",
".git/logs/refs/heads/master": "748344f6ce1f67dd3a9b62e789b6bf2d",
".git/logs/refs/remotes/origin/master": "a4f13e12853261503690e8eea2c7fe49",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/00/9c9f07fc0ba29a2bf0d842546dd3e060d35ab2": "bc5e2e0c6d0d5ae3344f3954d96ba7c8",
".git/objects/03/80c4221a2df1b6521035cdc23f897dd3b08996": "b5c8e362f48c1cfd3149ae3f458abfb1",
".git/objects/04/1e5dea2fa6f8d4ea872be67b4d910848f37c03": "a4bad9560d3d268e05f7e3ff378a5978",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0f/ab2703c4b6a0e93f76a9ec14a38bbae75dd237": "7f52c5e46b22e5cd14a69e9a68a627f0",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/f4418d4c776d53150ad1f5ea649324cc9ddeca": "786055359309af5c0dcbd240282b473c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a60385081b1c1ca2d735769bff0907a7606052": "e26bb9f15a3b436e1fca6a63a30108a7",
".git/objects/2c/7cbe67e8e23bf9b7911894c492a74efc763cce": "afd075521d2bab2351b577bbafb1c906",
".git/objects/3d/05e6f43b749960f8045cccde266313d72b2905": "dac6bbf9b6e0c6e633f5ff04c7040e89",
".git/objects/43/987edf3acbd05d703136593e83d75b5cd2adf5": "721dd59f5a1849e70a3d8f2fdc529ef4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/779aeaa162d31ec3bc36661cd707c521029e27": "812cd725d1631958d106c26e6c0b6703",
".git/objects/56/12db4c6129b85a6906457ba44f05002eedb6ec": "172b0d913d01f66f00aa3a5001aeca36",
".git/objects/57/f9a92b796f6921c9a9b00841f3edd15a6d8d3f": "ec50b2b18baa1ef30eedf2c708678d58",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/60/d04187e082718ae0187ddc0865aa63cbf99b1f": "e2508f7b401844c68ccf7bfcbbcd6cca",
".git/objects/61/f17c4ad020a5cc964dedb922908b842ecd47d3": "22f170bce5523bba5d14ebeb80db84a6",
".git/objects/64/d20644db24f2d4ea5629736934269715b89190": "0c2aeb59a90df00c07b2046c0b1402e3",
".git/objects/67/3048b5daf2424ea95db137e7a891b7c0a53b01": "a28ab8ce56d6a38d278b0fc47445f77e",
".git/objects/6d/18d5fb8e95b816d21876f42b4e2f9b72ba7204": "ab050ce6fcaff8db3df032c482ccddd9",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/3d13d44b2aabf1d37ff9cd0f7b8f246ac54c3d": "5287845249b903df59c8c48baa3a3e90",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7a/0a8e25ef0546609227b427060f4048737e7e7c": "1b0f468fbc83a3af8ef928010731898c",
".git/objects/7f/c59e5220c44de5ba8810c2cab4c0181d024350": "3e42741cbb8107f17cd6623c8b22611b",
".git/objects/80/f2386efc51af1183e7c079f0940973bc4ed928": "4deba19731a9916d3adac9a0fc1424f9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/959a00d39cbac24d6f5ae5a43592f864b53466": "ef6d3cef540e659a50987fce7a048d62",
".git/objects/87/d5385645539d6c1e6771edcbf02ab168d1d968": "7a0a272e4d08373a4156a884b40f7bd7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/07628f17dc7ad55e9eb6bebc9c1f855b9c1fe6": "3d1883b1e4d4dde65b62fc5660aeec9f",
".git/objects/8f/b53fcab2d0185d2b6839ede4b18fc6890bd965": "9727f97e15532168d9da6122c0159246",
".git/objects/8f/f67247f0484d2b99ae27963473d66835604fdd": "bf39405e1ff7b0c82383f96fb8798931",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/98269cc77457afb998b63737310dd44e8ba5ad": "e193781bbfc626aa1994538838bba217",
".git/objects/9f/c67a798d6ca805eaac723f5ba94780ac6ce6ce": "003ac84418e25aa03eb2cc58a545e621",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/85a78e0679b2030c9c63c25f8b4ef01a7f15a7": "1ffcb60592e4c8f7d200226b60dcf736",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/ad07466918cb4b91fe9932735919e5ec583e9c": "bae9b0a2a4e98b96a20ac383d1bde454",
".git/objects/bd/7326e49fbdb6b99f6c3f4b6e312a46c8472688": "c66b5907952dc7d5ced0979f2e689d56",
".git/objects/bd/ba88734ad39fe206c0b3221acf6329e262220b": "a0d9e3d0d15637f28a832250cd79ab0e",
".git/objects/c0/3305d308641c6d152492854164f50dcd85009a": "e116c071f54644a3777643bbd54993d2",
".git/objects/c5/677740b40366071174c3af44084e67c5747dd6": "1f45132f3cc2724ffb6930225592564d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3e6617094002b4aae0966e8750b80a455a09f8": "2ee24ed700a10dcf3f1786b7400fe04a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/333a6d934cb1ec0127b20d40bfb6cc93bcc74e": "faaf5fb30beff26f4763db231d46cb7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/5c09fd8d8dc60279b6976a6e08b3d457d8bccb": "a96290d45797e5abee835e00003dd88c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/504c3c4416f76fe2bdd6821f3abe48f80a3b30": "1d0057b35e13dbb14ca000b9057114cc",
".git/refs/heads/master": "842c6a65eb40fb1c4da28360122315bf",
".git/refs/remotes/origin/master": "842c6a65eb40fb1c4da28360122315bf",
"assets/AssetManifest.bin": "24b9a49f7f108b83bf859022f3f6bc42",
"assets/AssetManifest.bin.json": "b370c72b338feb1cf69749e6466115ff",
"assets/AssetManifest.json": "51bfb57b4d97ae0b2492b1655b22cb34",
"assets/assets/1.jpg": "88626ba5386488fb488c70e1d047a2b1",
"assets/assets/analogi.png": "0b9c9ab2fc54c99300bacff70d4ad6b8",
"assets/assets/bg2.jpg": "7fa55a6c1cd73d995ff36d9ab25d943b",
"assets/assets/bg3.jpeg": "71c0f130f8c3611db9c6ee8e970d242b",
"assets/assets/bg4.jpg": "786eb5069e90e8d40eb5376bb7ea6e7e",
"assets/assets/bg6.jpg": "888a155a44b20f953858d0f28f80096c",
"assets/assets/job.png": "9533740b6dc8e031fe4c46aa9150823b",
"assets/assets/kepribadian.png": "a9c9e18eb645b427c6a933e4d01f92bc",
"assets/assets/log.png": "b650b83551527f9b2488d0a590d62a06",
"assets/assets/logis.png": "2b4f0e9b84e4a866591968567909d3e4",
"assets/assets/logo.png": "47ad33bf72473376f68238041a2f45aa",
"assets/assets/logo1.png": "5242e429bf89417eef6ebdf87648c809",
"assets/assets/logo2.png": "9e970040e32a5d91afa8225d0e34d4bf",
"assets/assets/mcqs.png": "8d3ae4199eb438040d36b453333547a6",
"assets/assets/mtk.png": "24e15b590a8ddbbeb6cf10975d605e86",
"assets/assets/pastpapers.png": "3e6e32e082572aec59daceec447b1fd5",
"assets/assets/quiz.png": "d181c827437ba0cc2b8949cb7a786b30",
"assets/assets/svg/a.svg": "45f6767df4276a4ed961e87bad5ed947",
"assets/assets/svg/b.svg": "a78c907ef161dd8bf140b0947c302e7e",
"assets/assets/svg/c.svg": "50522158de6470e1d66a98d92e0c5b3d",
"assets/assets/svg/d.svg": "a1dc053ea08432658c31b36c17445c91",
"assets/assets/teknikal.png": "d65db4931754c03c8eb65d0867b5c55a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "50aeaf25fee6f353a6a365ecab42c7cb",
"assets/NOTICES": "48e56871673eadc43f509cc7dbb4bac9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "39caf413f9902a8f57812a3ce855ee1a",
"/": "39caf413f9902a8f57812a3ce855ee1a",
"main.dart.js": "f89014929c41a73e1f8d750d3df7947c",
"manifest.json": "35c92ccccf4ceaffda8e7540431f209f",
"version.json": "a0fe9dae7b0b1e26b1a25d4be0486199"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
