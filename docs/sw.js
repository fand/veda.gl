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
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/main.js",
    "revision": "9b94a9c2398b8cba7684ca7a190f0f46"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/_error.js",
    "revision": "b6299c29877cbb0a01dbd46df125d982"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/commands.js",
    "revision": "c9fe11c8d5e45fb04928901d76def024"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/contributing.js",
    "revision": "e5ba8c8b4152ad804cafb25bfd1d8d67"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/faq.js",
    "revision": "672db8005708010b715df99508236282"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features.js",
    "revision": "baf3c716f846e4f4ef663cf45ed29e1c"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/audio.js",
    "revision": "b365477e63566bcc0d6bb8913ae0fd1e"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/fragment.js",
    "revision": "c0441c5267c97d74ec8b9aa2a94bf575"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/gamepad.js",
    "revision": "85b3c448eeecbf6b275b2a765ad9cdb9"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/image.js",
    "revision": "a0a090e5db91a5b31d9d2c205fc1f703"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/keyboard.js",
    "revision": "099c0bee1f14046a89921efaa1953934"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/midi.js",
    "revision": "1493b90712451f5667a633e64ace54ce"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/osc.js",
    "revision": "e61edc7ffdad81acf4a8c9cd2ff70815"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/vertex.js",
    "revision": "fdd701f568cc12f4fd8b10325681ac02"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/video.js",
    "revision": "3b9aebc5066b8d6e7d8cd445d5f9c639"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/features/webcam.js",
    "revision": "fe6c100ce106b430595f4fe0e468ca53"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/index.js",
    "revision": "1c1a4bc3572d97c462143cdf726ed6ee"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/install.js",
    "revision": "812fedd894b61fb6efc9eb8c58ae9c00"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/parse.js",
    "revision": "9b624c4d9bea091f2cb7c2584189cd51"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/settings.js",
    "revision": "71e676ecbb156a82d1b6fc7b27cf249b"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/usage.js",
    "revision": "1987d5ac9a95246e7501d93c9a6199c5"
  },
  {
    "url": "_next/bac0f49e-0f99-4e8f-9536-383a79201010/page/vedajs.js",
    "revision": "7cab27602c8ce8fcb22853be97a63b13"
  },
  {
    "url": "commands/index.html",
    "revision": "b89fa420aa9ff977a585334c7ec3485d"
  },
  {
    "url": "contributing/index.html",
    "revision": "13384b2974cabedbadac1144e672a24a"
  },
  {
    "url": "faq/index.html",
    "revision": "aaa482a8939a57b4418d521a89afa5de"
  },
  {
    "url": "features/audio/index.html",
    "revision": "969f0ae783b293c1b2ad6323a8ac05dd"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "c08c2dfb843b2ad0e564884ab84b552e"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "32b3442be56e5df02cb4dbc7569edad2"
  },
  {
    "url": "features/image/index.html",
    "revision": "b62a85bbfc1be41921736596bffb2c38"
  },
  {
    "url": "features/index.html",
    "revision": "fd5bdb338a16487886f1198ffe2786a8"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "6a7db9670e0d70b2382ca652e1f74623"
  },
  {
    "url": "features/midi/index.html",
    "revision": "c3da4ade87cadc9545601c91f13137fc"
  },
  {
    "url": "features/osc/index.html",
    "revision": "992a4df49365a9a925e8691c03728ff4"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "860f7b88ce2b0aedea67cdc6feed9ef2"
  },
  {
    "url": "index.html",
    "revision": "c855feadb43084d1ea5d4dd47e0ee629"
  },
  {
    "url": "install/index.html",
    "revision": "e1b6b086f7ec8a9c1c9224de4c995021"
  },
  {
    "url": "settings/index.html",
    "revision": "ce229ab90afcd9eb7c557fc1800aaa65"
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
    "revision": "13018dc591682c51c9ebff7d6c2eb7a2"
  },
  {
    "url": "vedajs/index.html",
    "revision": "5b141e9acbd796c42e142598af21ee1c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
