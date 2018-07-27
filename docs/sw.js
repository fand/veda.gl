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
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/_app.js",
    "revision": "dca0229485e572b0b5f2c77fcb7eded8"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/_error.js",
    "revision": "2f55dfd6264dbf523d6bd402453aaf68"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/commands.js",
    "revision": "be348246e63a421c886ecccafe8deb66"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/contributing.js",
    "revision": "1d15b64e2013f2c6deb3fb310ec0b626"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/faq.js",
    "revision": "6660defd81bce9d361cc6db2318ea429"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features.js",
    "revision": "00bb7790183ee23980c20f7ac0f929d5"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/audio.js",
    "revision": "7f3ffc0e9b6e3c4978f80e397ac8d25c"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/fragment.js",
    "revision": "0574336ece69073bfd1ff00e0989347d"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/gamepad.js",
    "revision": "3023979cfcf51c181f700fba82e99fcc"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/image.js",
    "revision": "7c9e0bb313975b1fcb842c0d49bee8ad"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/keyboard.js",
    "revision": "a2a5d149ef2464de1d037ae399cec96f"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/midi.js",
    "revision": "66226dd07d691ea06cfd7f8ea7eb15e8"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/osc.js",
    "revision": "26d33e8f80a554e7baef2075e94b3845"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/server.js",
    "revision": "bc9b2f49dcd6a314023c9c518e1b5671"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/vertex.js",
    "revision": "448058f7ce4884e3c232b676527f9fdb"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/video.js",
    "revision": "eaf6608bb5034635bae65c1b5fef1613"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/features/webcam.js",
    "revision": "f3e1229185bedf8eee0a14a8b0df8c43"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/index.js",
    "revision": "eba61f88d75fed443093908bf708619a"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/install.js",
    "revision": "ffd64bcf2b83ebbd737d87c0f53f8a57"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/parse.js",
    "revision": "ecf6bb0ec10ca48c70264c1ca14b4fad"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/settings.js",
    "revision": "d59103ec7786a3d4404441fe7450e430"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/usage.js",
    "revision": "5540b0ad8406d222740bc410adecf8ec"
  },
  {
    "url": "_next/60c4a39b-9ecc-4be7-a30e-eea270c55620/page/vedajs.js",
    "revision": "db3ced025c0f9e1e4b6623353d7efb84"
  },
  {
    "url": "_next/static/commons/main-6cc66430dddc2656d77d.js",
    "revision": "4734bd8247ab207fe6e0ea750e9f8715"
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
    "revision": "69300c2b3f01a209ab1fbc0f40b9e9a8"
  },
  {
    "url": "contributing/index.html",
    "revision": "0e9223d1fa0acc03f8101ed4ccbb077a"
  },
  {
    "url": "faq/index.html",
    "revision": "8581236150781a68abb4371f748b430b"
  },
  {
    "url": "features/audio/index.html",
    "revision": "b7d6bb19121d0f3885ba83f00fe5f5af"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "1ce3c9b76045a7901ccfd61ab51871de"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "f8650346f63b8ffe934ae4df5ded200c"
  },
  {
    "url": "features/image/index.html",
    "revision": "65852ebbe509119eed2df0f42e0c4aab"
  },
  {
    "url": "features/index.html",
    "revision": "a48c0e0183848b9cac6495ad0244dbe6"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "6335a6bab6d6f0fbe2dc634b2dd560f2"
  },
  {
    "url": "features/midi/index.html",
    "revision": "f36eeb925519adfab121a50d3fdeaefa"
  },
  {
    "url": "features/osc/index.html",
    "revision": "c1f894e55d58f68ea10eff18389812e1"
  },
  {
    "url": "features/server/index.html",
    "revision": "6c721e46662ac8456ae1e25632b6140a"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "3372ab5f66e209afbfe12c52af66bd9d"
  },
  {
    "url": "index.html",
    "revision": "3ce6a8055835a2ec7dedbd195b379f71"
  },
  {
    "url": "install/index.html",
    "revision": "2cb7f262c2bb35541e101af23dd986b8"
  },
  {
    "url": "settings/index.html",
    "revision": "c766aaa93451fa39ae46a4252c3fe922"
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
    "revision": "67bd120e68584900eba7ab7034f82ecc"
  },
  {
    "url": "vedajs/index.html",
    "revision": "9249e67f039ecd9a299c278f913edc4d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
