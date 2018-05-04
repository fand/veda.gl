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
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/main.js",
    "revision": "8ec2541dc0823c0a76ddccfbaf69f1b7"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/_error.js",
    "revision": "74c961aa9039fe23dbb92df10224706c"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/commands.js",
    "revision": "1833856983132d156127b31c1b9b5c5c"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/contributing.js",
    "revision": "b9376a915cfc568edd8060976670f2e8"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/faq.js",
    "revision": "f2354d7a638a07c71e2451900060d05b"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features.js",
    "revision": "3ad4f12aa479f57c20e191f51dfa776f"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/audio.js",
    "revision": "1d9a5d0cb1d5fdc694c9e78d92388c96"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/fragment.js",
    "revision": "305131f094eaf8d4b0eb5e6e904fcafc"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/gamepad.js",
    "revision": "0fffb9f6b7f83a4217d4589deb190ae8"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/image.js",
    "revision": "8ea0467ae8af709e835bdb9964de948d"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/keyboard.js",
    "revision": "e0edf7415ac04c75a129793b25c991fa"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/midi.js",
    "revision": "b9313737a4d464cbac6a04378f0ace90"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/osc.js",
    "revision": "2c8f59fd4f0dba51b6c242139a3aa893"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/video.js",
    "revision": "c2d01bc30daed073e7d1da0c875407a3"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/features/webcam.js",
    "revision": "d13cb2b1eb7e5f0d19359e37531c0a9f"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/index.js",
    "revision": "94951d27dd6de5bcb3ca729ef456e905"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/install.js",
    "revision": "a7018375c1c9b6a33f943a92ce960925"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/parse.js",
    "revision": "f8224dd3254a92aa39283af70125a47a"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/settings.js",
    "revision": "a2d7f86fa64f9f454187e512085ee0ed"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/usage.js",
    "revision": "6eef7fb7d977ff11060aa474d1044d51"
  },
  {
    "url": "_next/066e5b52-d94e-4c43-a13d-4ce4c29f242a/page/vedajs.js",
    "revision": "1d6f8d77a4195f24707ad4c9f5cad41e"
  },
  {
    "url": "commands/index.html",
    "revision": "688ffc7e835cdad2b373954476b3b8f4"
  },
  {
    "url": "contributing/index.html",
    "revision": "e64ef25d71911b17e32de3ca1e13cd9d"
  },
  {
    "url": "faq/index.html",
    "revision": "3ae08220b05d210356ecaadfb3e1ca6b"
  },
  {
    "url": "features/audio/index.html",
    "revision": "140e43aae8e0e19897f939640a49fa3f"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "ba14548a75ce5267adb872dd379f1abb"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "d07be42ec3bb432d513169dee15aaf48"
  },
  {
    "url": "features/image/index.html",
    "revision": "ffaff089504f5c315a79494d7cff4e55"
  },
  {
    "url": "features/index.html",
    "revision": "b2500da4f11617066ea483759d45895a"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "87796da09712e9c0b5e4575dbe70cc55"
  },
  {
    "url": "features/midi/index.html",
    "revision": "df64d2dddd43bb52b16d9f7bba4553c1"
  },
  {
    "url": "features/osc/index.html",
    "revision": "2fb07af1e03e4823781821d3780a7abe"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "97054afdea533b1454d287dabab41c24"
  },
  {
    "url": "index.html",
    "revision": "cac31bec790be047efefeaa179b248df"
  },
  {
    "url": "install/index.html",
    "revision": "cee57e04d3f6901f45bc837ff5104c9e"
  },
  {
    "url": "settings/index.html",
    "revision": "1c1770932d811c2fe5e1dae575b88ab3"
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
    "revision": "191dcc0b1825cb4f3f3a9f155156ece1"
  },
  {
    "url": "vedajs/index.html",
    "revision": "9e80a526e0c960258326133fdf0bf202"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
