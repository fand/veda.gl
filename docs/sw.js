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
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/main.js",
    "revision": "b76ee3eff270f35565875ecf91bc396b"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/_error.js",
    "revision": "15c1872b43d0933e0e336d333e000891"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/contributing.js",
    "revision": "24aca68cdac5e7d6df8930dc962b8716"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/faq.js",
    "revision": "46d2e02b685be906041453a6a6c216d4"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features.js",
    "revision": "1472c90f5f76533430edc9751970479c"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/audio.js",
    "revision": "df4fa95c1073c239e62b8e4578705535"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/gamepad.js",
    "revision": "d2b4cea21cfc6609b510d2eb4a31b819"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/image.js",
    "revision": "bbc1fdca303c5c8c9081e63cbd5e35d6"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/keyboard.js",
    "revision": "705056319dd966764ff9f3eca960ed93"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/midi.js",
    "revision": "982cb98a9d9394e85b06fc84b80b6a50"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/osc.js",
    "revision": "bcd41013eef2df34b65564ee306953ae"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/video.js",
    "revision": "91c30e4bcfed5d134d573d739591247a"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/features/webcam.js",
    "revision": "dbcf5bb53f752b27ab748f8ff14594c5"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/index.js",
    "revision": "6c8751430385efce075e953de44e27d7"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/install.js",
    "revision": "8b5b16502d6397151e51f69532c941b5"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/parse.js",
    "revision": "7648f37808fd507a10aa840229e72c69"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/settings.js",
    "revision": "203c3a1e845c4484c31bcb7f0f129460"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/usage.js",
    "revision": "b1771399611420f4fdfdc1368a14902b"
  },
  {
    "url": "_next/72ddf9a8-208f-4cbd-8371-92eab4f62c5e/page/vedajs.js",
    "revision": "e6acbe07558c22bdaa5597fbcecb7dc2"
  },
  {
    "url": "contributing/index.html",
    "revision": "d7803495bb1bdb99db3262383f1792b0"
  },
  {
    "url": "faq/index.html",
    "revision": "f39fab09c93164d364a51882e04245d6"
  },
  {
    "url": "features/audio/index.html",
    "revision": "040c473a39d0cbfceae81d5d4fe3e46d"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "2638e2483bd32f7441a5c931099469bd"
  },
  {
    "url": "features/image/index.html",
    "revision": "34c7ea23b3beb7660c566e0dc577a153"
  },
  {
    "url": "features/index.html",
    "revision": "8ff64b879914c287162d9dacdd44bd7f"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "2591b3b9691cf064bc1e3a88b4037d4e"
  },
  {
    "url": "features/midi/index.html",
    "revision": "2dc5d88324399c69edd8bd1b23adb3fb"
  },
  {
    "url": "features/osc/index.html",
    "revision": "b2eb3b794157cd0473208536e504016e"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "4a9bfafe80a731e75981b73db688a9e4"
  },
  {
    "url": "index.html",
    "revision": "3a998720f09aed9c8dd9382da519b8eb"
  },
  {
    "url": "install/index.html",
    "revision": "ee1ab18509e0ddb76b10cdde04833d8d"
  },
  {
    "url": "settings/index.html",
    "revision": "aa9b848da2a1cfd3eaa73b6fa650c35a"
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
    "url": "vedajs/index.html",
    "revision": "63116a0482cdc43dea4d7d395a63af4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
