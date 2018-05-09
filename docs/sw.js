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
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/main.js",
    "revision": "38c062cd45a72211b393e360dba09b4b"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/_error.js",
    "revision": "b8f3c5fc3307aaffa9157c399d01d459"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/commands.js",
    "revision": "d0ca891b91dbf6ce64fa68e3ebf1d936"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/contributing.js",
    "revision": "d2904fff4f950bd8cecf8ee76834c2b7"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/faq.js",
    "revision": "07663418fab6db3d57ebfa23484abfb1"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features.js",
    "revision": "f7983537aac7934770668a7a641f7866"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/audio.js",
    "revision": "133600a40a089d8869fcbc76b7225002"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/fragment.js",
    "revision": "b66037cc5f4d384ebf42bdb372dcb0c0"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/gamepad.js",
    "revision": "9aa073bdc3fb750bc9c4989817a238c1"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/image.js",
    "revision": "f2d3422fb9fb7ff4cb1bc7bb31f0756a"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/keyboard.js",
    "revision": "8e23791cf208d6d0f95fa8b5f7ba400c"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/midi.js",
    "revision": "1004fe348c9aa08b8396e25bf3eb3f50"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/osc.js",
    "revision": "851c3b1357a17ef86d15de237be33b1d"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/server.js",
    "revision": "8662e80b40376b8ddc0b768460a6e4bc"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/vertex.js",
    "revision": "5fe01a9884428dd2ba4a034260dbfc4f"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/video.js",
    "revision": "9e29c24bd33186b3d3ebe73f48cd07ff"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/features/webcam.js",
    "revision": "69bbc0ac68c01feb94418a076181091d"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/index.js",
    "revision": "48bfda56ab5abbf9303017f66479f817"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/install.js",
    "revision": "881837a0d8b11cad0cec9ba4281a4a4a"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/parse.js",
    "revision": "7961be99f50dc4dff6a58200743c447d"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/settings.js",
    "revision": "fc22789e52a80b0f92543ef451a1cbc6"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/usage.js",
    "revision": "a8c9db26915eb6d27d7bab999d677504"
  },
  {
    "url": "_next/5c11a5e6-0f1c-4ba3-b640-56eb804476ad/page/vedajs.js",
    "revision": "69de6e7c25a0125f02db9a71ba2c8c92"
  },
  {
    "url": "commands/index.html",
    "revision": "59e68a111abb90b73cb895cc6597dd10"
  },
  {
    "url": "contributing/index.html",
    "revision": "e5defd0d85929d3f66ddf0867bba44f5"
  },
  {
    "url": "faq/index.html",
    "revision": "6f52e61fd6fd7146049f18ec905bf5a1"
  },
  {
    "url": "features/audio/index.html",
    "revision": "43821b2ac02be74845e24b3dc2275aa2"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "60574ab20e698aa595da16ef5e31cd5e"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "b2052666ad3c2a5034bb9c503542a3f6"
  },
  {
    "url": "features/image/index.html",
    "revision": "5ec1dda6d0e370548b5d34c4d2283a79"
  },
  {
    "url": "features/index.html",
    "revision": "a26742ced6450ef9cff3c06740329709"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "fc673050adfb611f38dd574287502ccf"
  },
  {
    "url": "features/midi/index.html",
    "revision": "e90bfa9c03f65c4bfdae3acb3d64249d"
  },
  {
    "url": "features/osc/index.html",
    "revision": "46ee2a22ea8702ddd8eb96b1ed7ed332"
  },
  {
    "url": "features/server/index.html",
    "revision": "a397bc4bfd62ce3f78e043b0871a4c7f"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "a66ecc3aa9ae01a7b4936eb19aed4945"
  },
  {
    "url": "index.html",
    "revision": "f0e5678d22caff35177eb93ef0ef7b49"
  },
  {
    "url": "install/index.html",
    "revision": "f5aa638d5e6d85ea81b55a6b7a560582"
  },
  {
    "url": "settings/index.html",
    "revision": "e2d232dec7a324693483ee22e11074c3"
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
    "revision": "a571f1f07f14211f27b4222cb59c80c3"
  },
  {
    "url": "vedajs/index.html",
    "revision": "74a37c978189f9a3f295ca304817d59c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
