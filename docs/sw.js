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
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/main.js",
    "revision": "a9f2a1680ce4579f52712a2226496a3d"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/_error.js",
    "revision": "13c7bb4cb45dc56eaa676f00741f2b34"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/commands.js",
    "revision": "3b90c314bb0b7bf623dc800ce24d3226"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/contributing.js",
    "revision": "e9bee53f50884ed272f91e08b54b03e2"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/faq.js",
    "revision": "a78dcbae00a793892d44c6ad476b10b3"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features.js",
    "revision": "5871fbca53a1f08eddffc3620a48facf"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/audio.js",
    "revision": "edc0fabbdf05888b7ac9ceba890fa039"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/gamepad.js",
    "revision": "e5dd14369dd5771b488cdae82b6b1d1d"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/image.js",
    "revision": "c74d86e8f5fca77f43a8e7b5c335bd62"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/keyboard.js",
    "revision": "e5d3f2dfbef00834f436aca35cb7327b"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/midi.js",
    "revision": "9ed2634fe0fe585a8679defb4b7a18c6"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/osc.js",
    "revision": "26920705729743608fd42eb70b914b3e"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/video.js",
    "revision": "b0bcd7a3e041c07f0f79f1b07465804a"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/features/webcam.js",
    "revision": "3dfa073dc3274b51571d1f565b168a57"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/index.js",
    "revision": "d061680989bb69665fcfbdd117bcd731"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/install.js",
    "revision": "0df0cdccccadea584f31a1d5c410a97e"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/parse.js",
    "revision": "1753345032cb16a28f10470a0da6f8bf"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/settings.js",
    "revision": "292c762fe951b104b999812a64b99ea1"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/usage.js",
    "revision": "d7ce183a949af696fdca8353dfed1656"
  },
  {
    "url": "_next/9976e897-56a3-4bc6-93a9-1ccf77b06378/page/vedajs.js",
    "revision": "46b42ae8cac919a21f6c56a110ae1b38"
  },
  {
    "url": "commands/index.html",
    "revision": "cebddd7c2f385b84bc9d38ca403a0f45"
  },
  {
    "url": "contributing/index.html",
    "revision": "24eb308218c16dd63bdb9b2dc65f8450"
  },
  {
    "url": "faq/index.html",
    "revision": "b6a1f8a075c8b44c8571b349fbc7d98d"
  },
  {
    "url": "features/audio/index.html",
    "revision": "94bf2b3251459b8e5bd0f812a451685d"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "ce9150049bb75561e4e2c27b642e22d5"
  },
  {
    "url": "features/image/index.html",
    "revision": "5e7cf5308b2714e12b87876e004a4d41"
  },
  {
    "url": "features/index.html",
    "revision": "4fd5f19b0815769c688b2cc743a5a64b"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "1b2af8b2592d8baf9c9543161d64282a"
  },
  {
    "url": "features/midi/index.html",
    "revision": "f60a54021463a9ea3605fd25c9658dd7"
  },
  {
    "url": "features/osc/index.html",
    "revision": "c95f5e9dd0dd94507e7593304f12d4a1"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "47edbd6ecca3a9e82db26dfe0913533c"
  },
  {
    "url": "index.html",
    "revision": "aeda964302ae5d5376773d04604e1dab"
  },
  {
    "url": "install/index.html",
    "revision": "9ef410714e4d699be2c5aaae34f89459"
  },
  {
    "url": "settings/index.html",
    "revision": "945c73415c9bc9ef30abc58e50e2c125"
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
    "revision": "d24bcf35f2ced1e28d390c3a57935826"
  },
  {
    "url": "vedajs/index.html",
    "revision": "c9aa37ce19005fff217c618681fa0400"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
