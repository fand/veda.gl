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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/main.js",
    "revision": "d6f5622ad38b505c7171ff5fe528c282"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/_error.js",
    "revision": "997ee19baec5ba97feacccff4c7d8ff0"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/contributing.js",
    "revision": "d461a9366331c07f862e1e38ad12b39e"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/faq.js",
    "revision": "46d2e02b685be906041453a6a6c216d4"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features.js",
    "revision": "1472c90f5f76533430edc9751970479c"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/audio.js",
    "revision": "887d1c630e1dec9bf6d4e950287938d9"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/gamepad.js",
    "revision": "d2b4cea21cfc6609b510d2eb4a31b819"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/image.js",
    "revision": "bbc1fdca303c5c8c9081e63cbd5e35d6"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/keyboard.js",
    "revision": "c1f525962159c2a5c571c6ebf6a14460"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/midi.js",
    "revision": "982cb98a9d9394e85b06fc84b80b6a50"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/osc.js",
    "revision": "bcd41013eef2df34b65564ee306953ae"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/video.js",
    "revision": "91c30e4bcfed5d134d573d739591247a"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/features/webcam.js",
    "revision": "b828c9bae0b79152813a26315c7e1810"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/index.js",
    "revision": "1a38ec69d98004052b74d7794a75b305"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/install.js",
    "revision": "8b5b16502d6397151e51f69532c941b5"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/parse.js",
    "revision": "7648f37808fd507a10aa840229e72c69"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/settings.js",
    "revision": "203c3a1e845c4484c31bcb7f0f129460"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/usage.js",
    "revision": "b1771399611420f4fdfdc1368a14902b"
  },
  {
    "url": "_next/514c7b54-f4ef-4e7b-8763-8770bfc99300/page/vedajs.js",
    "revision": "e6acbe07558c22bdaa5597fbcecb7dc2"
  },
  {
    "url": "contributing/index.html",
    "revision": "1261260c80c116e8a3f11c8a3d19064a"
  },
  {
    "url": "faq/index.html",
    "revision": "511f012c467dcd646ef2aa24788fdf54"
  },
  {
    "url": "features/audio/index.html",
    "revision": "1d7bd544a2f8e6471bde90988518b9a0"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "cb3c1933518ccca0c4ef1e4527a75fda"
  },
  {
    "url": "features/image/index.html",
    "revision": "c02118a4befa84b6f4fd9e674af6d908"
  },
  {
    "url": "features/index.html",
    "revision": "a812eb6c2cf5d0d8272668c87fd8ab1c"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "7084156afaf945265a9c9e1d11166791"
  },
  {
    "url": "features/midi/index.html",
    "revision": "7222b3607989d677a3eb95b0e4124f91"
  },
  {
    "url": "features/osc/index.html",
    "revision": "5cb4ad87f3ecf43af533cc8488db10c1"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "eabc5a7701a58ea9285297ffed51a872"
  },
  {
    "url": "index.html",
    "revision": "6da05bff8489a12650025cf5e3ffed0f"
  },
  {
    "url": "install/index.html",
    "revision": "4e28ff6264a33922ed517f3616b76fd1"
  },
  {
    "url": "settings/index.html",
    "revision": "f975644137218de542e99ae2b37b62fa"
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
    "revision": "dae44c3818a68119a561ec8412e6f8d2"
  },
  {
    "url": "vedajs/index.html",
    "revision": "43a925b70468a5d1adb41c3da4031d29"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
