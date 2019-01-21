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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/_app.js",
    "revision": "9ab5f3ec579199543f36e4a10d9dad7e"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/_error.js",
    "revision": "8a6350e1154c79b5d177d422c1cd3cef"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/commands.js",
    "revision": "1d325ea0d62b342d52436249a592c4e9"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/contributing.js",
    "revision": "4b324718ed39847a1c2524b3743c37ca"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/faq.js",
    "revision": "098534d13202e59daf0e352d9249a37f"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features.js",
    "revision": "804eda111d1484db9457b9c0e07ecdb3"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/audio.js",
    "revision": "8ce8069d907ee7d4905d4a14b5d0a0f8"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/fragment.js",
    "revision": "1e835b7d22d569a8fd79b9f5460653fb"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/gamepad.js",
    "revision": "4c5be40dc627c407dd620e80536a5519"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/image.js",
    "revision": "7c0dac3963e25a8dc4852349b4769bf7"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/keyboard.js",
    "revision": "0cb1f18e8fb9d51cbbc8a272bc20412a"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/midi.js",
    "revision": "79ed5b2562c5bdd3ebb55b99a8e1a6c2"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/osc.js",
    "revision": "9113861fd4e02cd486b32f596048f618"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/server.js",
    "revision": "809b7841dd9afeff9ad4eb141f592937"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/vertex.js",
    "revision": "d76b8176996bdfe4790a66b2223c5e48"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/video.js",
    "revision": "2bdaf4936386570788dd5339aa8bbb84"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/features/webcam.js",
    "revision": "ae8657648d58c8655f31ca95f95fd81c"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/index.js",
    "revision": "eba217913a1a62eaae5b913eedaf7b9a"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/install.js",
    "revision": "faee076caba59a89e7c1d06893b56e32"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/parse.js",
    "revision": "5bab75d96ffb2e7194d21de81a1a2f4f"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/settings.js",
    "revision": "a6ad71502fb443dce71f7e535030b3a3"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/usage.js",
    "revision": "66b61af31846039d7106c819ea093ef6"
  },
  {
    "url": "_next/static/9RwFZDwmXC6N45YP6TCY1/pages/vedajs.js",
    "revision": "12617c6b0e04c78c493b3b5455a83e97"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.6a704e22fbd781a6ebcc.js",
    "revision": "f71970a88d4490e511587db66b1dcdaa"
  },
  {
    "url": "_next/static/development/dll/dll_0a5735af42686c2a38b2.js",
    "revision": "50fe8806913bd1ccab2460550b746f07"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "0f00edeb20db6ac807e714a1ebca3a85"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "74d1c5e41cf0fea527ad8d7327cbc2f5"
  },
  {
    "url": "_next/static/development/pages/commands.js",
    "revision": "7f53b9ab702a30899e8afa9d8cdc9c66"
  },
  {
    "url": "_next/static/runtime/main-3517a3deedd0b9836efd.js",
    "revision": "7d8798c2142e9e183efa99753e1bae7f"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "dc3424c01c4c93ea372d3488e221f21b"
  },
  {
    "url": "_next/static/runtime/webpack-42652fa8b82c329c0559.js",
    "revision": "3e44118e4b15620065eb34bd349f2c62"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "d91b673e30f742919636bd0a67e252f5"
  },
  {
    "url": "_next/static/webpack/1b49c2665a26b37c9e1c.hot-update.json",
    "revision": "c6ac68d298c892e3cdef70b7043232f7"
  },
  {
    "url": "_next/static/webpack/21c9d657d94f528386c7.hot-update.json",
    "revision": "ceff46fd96e435b3fb365172bbd6e047"
  },
  {
    "url": "_next/static/webpack/98c9b067c27f2bc642ce.hot-update.json",
    "revision": "13ebb55d05e6172928479aea06de9a39"
  },
  {
    "url": "_next/static/webpack/b4f1183c95b74097044f.hot-update.json",
    "revision": "3cc4430cc58e0d8a72161d2b629f9488"
  },
  {
    "url": "_next/static/webpack/static/development/pages/commands.js.1b49c2665a26b37c9e1c.hot-update.js",
    "revision": "fa6a0e5e10b22f2f9309d6f1b7abf0dc"
  },
  {
    "url": "_next/static/webpack/static/development/pages/commands.js.21c9d657d94f528386c7.hot-update.js",
    "revision": "d06afb259a912b65b55246bb9dee8ef1"
  },
  {
    "url": "_next/static/webpack/static/development/pages/commands.js.98c9b067c27f2bc642ce.hot-update.js",
    "revision": "a37548a6105beb881f0d7a9f7f326f30"
  },
  {
    "url": "commands/index.html",
    "revision": "8329e625a5ba5a6de36bf9399f69d1f0"
  },
  {
    "url": "contributing/index.html",
    "revision": "3cc54b6a3d726b61d29b6b0c41b2b26e"
  },
  {
    "url": "faq/index.html",
    "revision": "86668676c12da9f569d0c820ae0f712d"
  },
  {
    "url": "features/audio/index.html",
    "revision": "48adfaacf28edef7c62e7aa3634f766d"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "1c43ebe6563955813f5865dc08801170"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "f4854076b04b2d7d576d05e0255371da"
  },
  {
    "url": "features/image/index.html",
    "revision": "20e8ab18ca7d2c7dd02df9566f85c91e"
  },
  {
    "url": "features/index.html",
    "revision": "0a49ba6606438d58501c43392f282958"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "3187ec6fa75d84cc2a2d381b39433c14"
  },
  {
    "url": "features/midi/index.html",
    "revision": "9d405b44f8877785f7cd903bbe0c7078"
  },
  {
    "url": "features/osc/index.html",
    "revision": "1a46c61746e8f1486af6d8d006e5470c"
  },
  {
    "url": "features/server/index.html",
    "revision": "89b665743a69879b34cd1617cd8e4519"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "656da81405f5d685dcadbf4b18f90c32"
  },
  {
    "url": "index.html",
    "revision": "b35e6da6766323339d9b51efcae21be7"
  },
  {
    "url": "install/index.html",
    "revision": "1c4a4f11a21f456fd1ae63c1145f5e83"
  },
  {
    "url": "settings/index.html",
    "revision": "6c01a39699bed9d3efacfed2b0367208"
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
    "revision": "58a5663046779fd31e7dd5717b7e5fa7"
  },
  {
    "url": "vedajs/index.html",
    "revision": "3dc1c9af0fea78238b3ec61d37e9a6e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
