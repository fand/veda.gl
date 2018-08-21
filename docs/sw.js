/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/_app.js",
    "revision": "55c7d90b84b1a34e769dfbc4831fe6d0"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/_error.js",
    "revision": "b7aefa10f2d6829847692fc49b5eded1"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/commands.js",
    "revision": "5329ca93f8a987a89346f229effa874c"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/contributing.js",
    "revision": "f397ef885f7a8333be347f2ce6343be0"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/faq.js",
    "revision": "1a3b09f6f7eeb2bb54aa9d22e3c8a396"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features.js",
    "revision": "43b57276560db1fee78be84b13cd8420"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/audio.js",
    "revision": "bc54c7098d347df3e74cb7fa58adae18"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/fragment.js",
    "revision": "e9dfba5803511dddd66b15216d753863"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/gamepad.js",
    "revision": "81a21cda7a7d1b30d83bdbdd2664e6f5"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/image.js",
    "revision": "ce430d5116fd11f0a58c3f19ea9a75ae"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/keyboard.js",
    "revision": "2c28ff2be3770150ca9c109aa716524b"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/midi.js",
    "revision": "ee2044cb7740d77d2186745851085b25"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/osc.js",
    "revision": "2a71b1048cd6a3ba3bc15506c695cd8a"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/server.js",
    "revision": "f38ef1facea3c594dde73174b5bb0d0f"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/vertex.js",
    "revision": "12b27adb0898b3f26850802858b36cc6"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/video.js",
    "revision": "056cdffa26030d0e8b960e2b9b2c6357"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/features/webcam.js",
    "revision": "4794c09a28d8be187d4851c1a95c3546"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/index.js",
    "revision": "ebb965773c44c3c669a24162aa41f445"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/install.js",
    "revision": "2d1b11e78f5a1e237c4c454826eaf8e1"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/parse.js",
    "revision": "7f6da61fd8ffa0a1c69e3a9202807f6c"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/settings.js",
    "revision": "acdd0393a24a4332ade608e49bdc1bd2"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/usage.js",
    "revision": "e7e2c70671c0e7de9e9d0a9745769f8b"
  },
  {
    "url": "_next/fd8f3493-1855-49fc-bc8d-5c7c839b57ab/page/vedajs.js",
    "revision": "755c66b82aaad5753d385f564a8add23"
  },
  {
    "url": "_next/static/commons/main-0c14b86d875dce1bc928.js",
    "revision": "a24448b93ed60b09832adcd256773989"
  },
  {
    "url": "_next/static/commons/main-4ca77e1633313f4f3a79.js",
    "revision": "2a801d22b6367e57c6d521fd214cedf8"
  },
  {
    "url": "_next/static/commons/main-52a531ce3ff063586362.js",
    "revision": "7d2d169736afd9d176622c64b7b54a95"
  },
  {
    "url": "_next/static/commons/main-6cc66430dddc2656d77d.js",
    "revision": "4734bd8247ab207fe6e0ea750e9f8715"
  },
  {
    "url": "_next/static/commons/main-98e15616fd8c7aca3cab.js",
    "revision": "6f85df77417aa26ae9ed8e91b83b27bc"
  },
  {
    "url": "_next/static/commons/main-a9c4537f2a7e9dad9a77.js",
    "revision": "9d140fb0d4e9fe57005d50e72c01f35d"
  },
  {
    "url": "_next/static/commons/main.js",
    "revision": "624a7e0deffb4654fe0e23b605221e37"
  },
  {
    "url": "_next/static/commons/manifest.js",
    "revision": "5cfe628c4d578985e5b4303b6ebbd2d8"
  },
  {
    "url": "commands/index.html",
    "revision": "87bcfd965bda2be4685ad9bebef29fa9"
  },
  {
    "url": "contributing/index.html",
    "revision": "f70388fa7bf17cd205acf047219d2a38"
  },
  {
    "url": "faq/index.html",
    "revision": "ae967768ddf12ea264ef515333f1373f"
  },
  {
    "url": "features/audio/index.html",
    "revision": "a80cfa09c88874f9c3bab559cfb56814"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "81e14b46ca8572c70c78584825966d9b"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "03f21a939de35ffab38d170700751ca9"
  },
  {
    "url": "features/image/index.html",
    "revision": "33ac2ede65c82d17b2dae52542dcc87d"
  },
  {
    "url": "features/index.html",
    "revision": "b9b0442364079ae940214cd23e8cab44"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "98a2b88cb49c011e6d92266aa080630b"
  },
  {
    "url": "features/midi/index.html",
    "revision": "4141ff29581f7e7e75876e57250b25a2"
  },
  {
    "url": "features/osc/index.html",
    "revision": "a002b51e95c450976917f08242a4610f"
  },
  {
    "url": "features/server/index.html",
    "revision": "5a4f0209432fd29af02bc327829536de"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "a616f69c081ae710e48ba1dfd73e0700"
  },
  {
    "url": "index.html",
    "revision": "6b08f4baaec096ed03ec1be31a0a9566"
  },
  {
    "url": "install/index.html",
    "revision": "dc423981f2b6d1d15cf2a1d7526a9e31"
  },
  {
    "url": "settings/index.html",
    "revision": "2b6d6642f63a98686b1f1b880a0559fd"
  },
  {
    "url": "static/favicons/android-chrome-192x192.png",
    "revision": "5ee1aac3454871ebce909c149f7be7d1"
  },
  {
    "url": "static/favicons/android-chrome-256x256.png",
    "revision": "d7a126be0ffa982e6a064541b547b060"
  },
  {
    "url": "static/favicons/android-chrome-512x512.png",
    "revision": "d6cfc206fe4f4775ccb3b5dd65e41723"
  },
  {
    "url": "static/favicons/apple-touch-icon.png",
    "revision": "f938e747fa56516d7d3422af9536744a"
  },
  {
    "url": "static/favicons/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "static/favicons/favicon-16x16.png",
    "revision": "68d9c01519f8319e840a6f8e5f0d158a"
  },
  {
    "url": "static/favicons/favicon-32x32.png",
    "revision": "b8f4952242649173d62e338a15871621"
  },
  {
    "url": "static/favicons/favicon.ico",
    "revision": "a92456a94469947c73b90e29f783c240"
  },
  {
    "url": "static/favicons/manifest.json",
    "revision": "03113edc72b1e85e2b3205c0f3a4c905"
  },
  {
    "url": "static/favicons/mstile-150x150.png",
    "revision": "5d41fe5fb3103e98fd75f97aa6a00749"
  },
  {
    "url": "static/favicons/safari-pinned-tab.svg",
    "revision": "1b4482c6839f05f15ae3cb03fd0f1573"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.eot",
    "revision": "76b56857ebbae3a5a689f213feb11af0"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.svg",
    "revision": "27ef0b062b2e221df16f3bbd97c2dca8"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.ttf",
    "revision": "177cc92d2e8027712a8c1724abd272cd"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.woff",
    "revision": "521d17bc9f3526c690e8ada6eee55bec"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.woff2",
    "revision": "60c866748ff15f5b347fdba64596b1b1"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.eot",
    "revision": "687596afb6f25cbf28e2ab036f2228cd"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.svg",
    "revision": "c0a3320c5a9694ba4e43a880e3de5cf2"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.ttf",
    "revision": "c03f38daf03bc9e1329c1d9215406a13"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.woff",
    "revision": "8a648ff38ded89ea15916e84529d62d3"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.woff2",
    "revision": "06bbd3188b34820cd83a0e0b3d0a6f57"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.eot",
    "revision": "7728dd9fbbce1c14cfbf8579d7a867a1"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.svg",
    "revision": "e16f375be3c2a73b58255a02f6d3a9ce"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.ttf",
    "revision": "c062d7d188586db3c4cf61e1ae43b331"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.woff",
    "revision": "1cd5320f8937d337b61d5117cf9d7b28"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.woff2",
    "revision": "223a277bd88d8a90c8cdf24cda0ad5f5"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.eot",
    "revision": "9dce7f01715340861bdb57318e2f3fdc"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.svg",
    "revision": "7aab4c13671282c90669eb6a10357e41"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.ttf",
    "revision": "c045b73d86803686f4cd1cc3f9ceba59"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.woff",
    "revision": "bf2d0783515b7d75c35bde69e01b3135"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.woff2",
    "revision": "cffb686d7d2f4682df8342bd4d276e09"
  },
  {
    "url": "static/images/1.jpg",
    "revision": "c1373099a0c82e47ce87bd7035c7cea5"
  },
  {
    "url": "static/images/1.jpg.org.jpg",
    "revision": "3268ad51b5d219803dc72793c198de27"
  },
  {
    "url": "static/images/2.jpg",
    "revision": "5dc7db372e3b4c1d733eed7efc1e09b4"
  },
  {
    "url": "static/images/3.jpg",
    "revision": "109c8d633a08a115f6dad7726d5c2fd7"
  },
  {
    "url": "static/images/font.png",
    "revision": "b0625a60927ded509fa13336c69482e2"
  },
  {
    "url": "static/images/hashtag.png",
    "revision": "adf75bfd9337f19d348a67a8d2e85085"
  },
  {
    "url": "static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "static/images/i_share.png",
    "revision": "c4047a5a8cb5178ec092916c211e864a"
  },
  {
    "url": "static/images/lgtm.gif",
    "revision": "0846c564649ce34b42857459e16e3644"
  },
  {
    "url": "static/images/logo_120h.png",
    "revision": "ebaa74d3948b7efbe74c638f45611bef"
  },
  {
    "url": "static/images/logo_3600h.png",
    "revision": "01bad4bc382fb8000dc48401adc947c5"
  },
  {
    "url": "static/images/logo_360h.png",
    "revision": "a8a721165e86ca95fd91d9475f68a23b"
  },
  {
    "url": "static/images/logo_720h.png",
    "revision": "f55a8c18a711d6d1c5fb171fd38ceb08"
  },
  {
    "url": "static/images/logo_header.png",
    "revision": "e0a0277218b700f57f12cc396d0dc3fa"
  },
  {
    "url": "static/images/osc.gif",
    "revision": "1f834656b94fe77352a7b8ef42df982c"
  },
  {
    "url": "static/images/rebuild.png",
    "revision": "82d11cb0740a592fca013c0c6117b7c4"
  },
  {
    "url": "static/images/shield_dummy.png",
    "revision": "eb8270fbf11a4e10ecea90fc717a4f84"
  },
  {
    "url": "static/images/tweet.png",
    "revision": "6404fe6c4c6577074a88c26d0e3732bf"
  },
  {
    "url": "static/images/usage1.gif",
    "revision": "e3d50377df54e558a83ea943dada2e0c"
  },
  {
    "url": "static/images/usage2.gif",
    "revision": "d7f5c700bcc7c1fa293dcc2f9406392e"
  },
  {
    "url": "static/videos/1.mp4",
    "revision": "244b0479338bed339650526f156d5957"
  },
  {
    "url": "static/videos/1.mp4.org.mp4",
    "revision": "cf8821bd9c2c78fd7c3be3be6a8b2844"
  },
  {
    "url": "static/videos/veda.gif",
    "revision": "606ae455bf6a149ee68e3dd7b1e9020b"
  },
  {
    "url": "static/videos/veda.mp4",
    "revision": "040b0697759a55767d972612f9bf94c5"
  },
  {
    "url": "usage/index.html",
    "revision": "a6ceb6e11a91d5dff5f0655b90a5d54f"
  },
  {
    "url": "vedajs/index.html",
    "revision": "1c36596633012550bb16b0174a9179ae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
