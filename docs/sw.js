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
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/_app.js",
    "revision": "55c7d90b84b1a34e769dfbc4831fe6d0"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/_error.js",
    "revision": "c60d8a5300463cecd66eef4bac671ce1"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/commands.js",
    "revision": "5329ca93f8a987a89346f229effa874c"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/contributing.js",
    "revision": "12fefc2f42cb14639a2b0df8e1213037"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/faq.js",
    "revision": "2cdb7e01b280e35d097b310fece2227b"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features.js",
    "revision": "6440f87166388ffbaea70305a599e9de"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/audio.js",
    "revision": "50270bb3646d34629d60b5abd5521593"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/fragment.js",
    "revision": "6ca5f389e92e8e8219e39f204bbc20fe"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/gamepad.js",
    "revision": "4020787e07c65afe5ef5ed24b7a5b952"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/image.js",
    "revision": "915dc7968a0eb0425cf9030a5252caa1"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/keyboard.js",
    "revision": "46e7631b7698548639b0f5ae6090e0a8"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/midi.js",
    "revision": "053c3ec6dbfb276eb5f8fecf97cf812c"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/osc.js",
    "revision": "9acaff196437d9c892a8393d3fbdb3f4"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/server.js",
    "revision": "af596805278f53d67eabeff39620c938"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/vertex.js",
    "revision": "27ce30cc6f8803106a437176a263c7cb"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/video.js",
    "revision": "148a08de0687cc763074336e7fd3d8eb"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/features/webcam.js",
    "revision": "7c64cab6a58e6476b344f99a4fa15e6e"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/index.js",
    "revision": "b4500348add0a69e0e16981bafe49a61"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/install.js",
    "revision": "05db5e71bd867abe971d7873182a79e4"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/parse.js",
    "revision": "2c4f178fe1e6e3347bf83b615d527de5"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/settings.js",
    "revision": "2805cea3b850e89299a73ffb7e936e55"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/usage.js",
    "revision": "15485f58e061cc5722aa2c5b270848dd"
  },
  {
    "url": "_next/37d09366-b3d6-493c-badf-41f846da2d40/page/vedajs.js",
    "revision": "c6f566cb9e9699c88955b28c2746d8b7"
  },
  {
    "url": "_next/static/commons/main-6cc66430dddc2656d77d.js",
    "revision": "4734bd8247ab207fe6e0ea750e9f8715"
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
    "revision": "ad7a2ff852a5323317f92b6ba4f382fd"
  },
  {
    "url": "contributing/index.html",
    "revision": "cedaceb91ffa4ab727a98e88268cdf6e"
  },
  {
    "url": "faq/index.html",
    "revision": "48f331b80efe4f2bcb9d6c8bf80f1e2c"
  },
  {
    "url": "features/audio/index.html",
    "revision": "11594679433c9e06d2a6e0d7eece1bbd"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "70943ffbe87e9c253e24493b547300bd"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "a91925c118f61a12dcb7e1712467c533"
  },
  {
    "url": "features/image/index.html",
    "revision": "dd3d9a8971a8914d723ab445d9bbec67"
  },
  {
    "url": "features/index.html",
    "revision": "cca0070e355bd32af38a162f285cd0a6"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "1582dd34eba4113aa4d0fb9baa79400f"
  },
  {
    "url": "features/midi/index.html",
    "revision": "2a03cafd70933b9df6c983f150280604"
  },
  {
    "url": "features/osc/index.html",
    "revision": "19a356c54e1d0e362ef523b24b65a081"
  },
  {
    "url": "features/server/index.html",
    "revision": "4cc0468003cb5d4e9321dcf836751aa7"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "bacccd185f54ce99598edcd41797cb3f"
  },
  {
    "url": "index.html",
    "revision": "618fd4ffe7ddd0a355e16bfe9d2c8638"
  },
  {
    "url": "install/index.html",
    "revision": "a035e5e30ed126853a487feeab40346c"
  },
  {
    "url": "settings/index.html",
    "revision": "63322d3f68090d5f8e2c88e9d963b6f3"
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
    "revision": "562b9f0d0c1a0c99d64423804d21daf9"
  },
  {
    "url": "vedajs/index.html",
    "revision": "649ec261efbdb1d95ac3c6f06dc1dac4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
