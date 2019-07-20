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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/_app.js",
    "revision": "d030a8eeae077837ea39909c5450ee62"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/_error.js",
    "revision": "5cee781479a71a1905eda34738220046"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/commands.js",
    "revision": "ed13c238ad6a7e78b3de0607b27ca640"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/contributing.js",
    "revision": "b76a7f7611e2215fe1983f2022a1345d"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/faq.js",
    "revision": "9b81667e9d46239482f6d7e34a184529"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features.js",
    "revision": "40e11f98bcc8e7a52d7a4160b5549121"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/audio.js",
    "revision": "1645f5f2b26dedf0c00ee3a4ae361b0f"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/fragment.js",
    "revision": "2c8011dabcaee8154a9de098b34cf03c"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/gamepad.js",
    "revision": "74c0d40deef1e5454af3ef054f31ac3b"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/image.js",
    "revision": "226493a5c5b5f391bef5f57e867acd03"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/keyboard.js",
    "revision": "64fce9e2da6e32a379f16808cd53ef1e"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/midi.js",
    "revision": "06edafbe5cbedf69b7f17c4440dedf90"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/osc.js",
    "revision": "e01fcc4ab9bc7f437fb71e127da9d3b8"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/recording.js",
    "revision": "4fedd213f4d832c91364fea7779de6ea"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/server.js",
    "revision": "fc04b75a4fd9fe2a46c80d1000c4858a"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/vertex.js",
    "revision": "0cbd4a8d95c8d42311db707a9b9747bc"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/video.js",
    "revision": "8e509ec16dd0ee054465da1fafbcf3f9"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/features/webcam.js",
    "revision": "d1871c0436a393a8b57ccf1ca5220ad1"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/index.js",
    "revision": "d415aa9bb6c7d3400b3ec272142f5889"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/install.js",
    "revision": "39d2df060f6094f72896303efa130b5f"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/parse.js",
    "revision": "2f247073a343265a8d432097894b7144"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/settings.js",
    "revision": "2964a5cd5864fdbfb2ce987d27d8561d"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/usage.js",
    "revision": "e953756f62f2eb087e92790ec230f3dc"
  },
  {
    "url": "_next/static/C6RhVLwEHvI4zW5TXDd65/pages/vedajs.js",
    "revision": "279b82442710bb96727f2649f8431c77"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.fddad68eec4b90c3ba18.js",
    "revision": "ee10a15e28e00e9a0978cd3eefe136d3"
  },
  {
    "url": "_next/static/development/dll/dll_aa8f31c0c93a8f34edc5.js",
    "revision": "315d6f1b0d40a35d1574c722a8c86381"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "2c626eb251570003a7aeca0ac22db40d"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "77d51aca27edb9e7309ccab1a1144d27"
  },
  {
    "url": "_next/static/development/pages/commands.js",
    "revision": "e76e54f489648c7610b758a0700c6c65"
  },
  {
    "url": "_next/static/development/pages/features.js",
    "revision": "e4a32b294d5e4d33a9a7dd3905224127"
  },
  {
    "url": "_next/static/development/pages/features/gamepad.js",
    "revision": "69d20731ed485f9e139c1993cd1553f9"
  },
  {
    "url": "_next/static/development/pages/index.js",
    "revision": "68457228f06145b1adae267055d40543"
  },
  {
    "url": "_next/static/development/pages/install.js",
    "revision": "669f46628f677fcff1d1c5b3d2fd7bc4"
  },
  {
    "url": "_next/static/development/pages/settings.js",
    "revision": "618359ba3c4602d8e12dbbe233777726"
  },
  {
    "url": "_next/static/development/pages/usage.js",
    "revision": "3ed4422120e91361079d2318e3f7487d"
  },
  {
    "url": "_next/static/runtime/amp.js",
    "revision": "4e1f8a488c2e23ace0faa5c87e8785fe"
  },
  {
    "url": "_next/static/runtime/main-0df88d6239c8399435bb.js",
    "revision": "38649f2fcd26373b155901d53550a651"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "27ff06fa520ffeb93a56bc6529ace6ec"
  },
  {
    "url": "_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "e530d478b947cd756a8ea9941726e6bb"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "39df8b7df7c8da384d74a0e1d1e330e7"
  },
  {
    "url": "_next/static/webpack/351f329f10d923e92eae.hot-update.json",
    "revision": "fd70baa7d4963ea907db344009c889b8"
  },
  {
    "url": "_next/static/webpack/6e655262ca45d0fbb2ae.hot-update.json",
    "revision": "02bb444638a1a25f45c2cba9d9b7622c"
  },
  {
    "url": "_next/static/webpack/72a4b4f3609b37e6dac8.hot-update.json",
    "revision": "49bd9c3fe76904f3b3b084f66cc41dad"
  },
  {
    "url": "_next/static/webpack/a643d65fbf45f5bf0835.hot-update.json",
    "revision": "c39de2773fdb36d6f2fcfa11835a350b"
  },
  {
    "url": "_next/static/webpack/cba8bfc0d3d815d67fc1.hot-update.json",
    "revision": "4130ba24b39ab062b9ea1dcf45d4a28d"
  },
  {
    "url": "_next/static/webpack/dc450169cb7fa9f56107.hot-update.json",
    "revision": "230ab31560e28da4846a59c41743ce5b"
  },
  {
    "url": "_next/static/webpack/f749df35a8413486734a.hot-update.json",
    "revision": "0cde9d6729c262d3198417ce67f555c7"
  },
  {
    "url": "commands/index.html",
    "revision": "865befbcda19e0348a726ecdcd0df272"
  },
  {
    "url": "contributing/index.html",
    "revision": "8de5ac50792d556784fc7452f3208ae7"
  },
  {
    "url": "faq/index.html",
    "revision": "6d60a80b685592e0daa2fd39d0cba5ac"
  },
  {
    "url": "features/audio/index.html",
    "revision": "8b0b251ca1020c087f172b6ecb22c395"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "fe553b367be1a6f4d3e6754718e734b8"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "8f237dfb262b34fa9cc8b12194d55f3f"
  },
  {
    "url": "features/image/index.html",
    "revision": "2bde354dbd12c7131af2162bddd2659e"
  },
  {
    "url": "features/index.html",
    "revision": "bca1a0be2ab21af32bf105b7e49f5b38"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "a8ca81cfdc1553d748f12756459d7df7"
  },
  {
    "url": "features/midi/index.html",
    "revision": "2ab5d9c5b24801c70ad559a0df328280"
  },
  {
    "url": "features/osc/index.html",
    "revision": "fd17d378936b0cd5ad20b33cef826dd4"
  },
  {
    "url": "features/recording/index.html",
    "revision": "247fda9a7c4650234cb80cfb06af2ea1"
  },
  {
    "url": "features/server/index.html",
    "revision": "b9a24e0cd8ba13a7b29a012d0fee8e1e"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "444a439c7c6fc6f5eea2f9cc371afe5e"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "78e5f8ee8bf5043ce245206deeac0db1"
  },
  {
    "url": "index.html",
    "revision": "3614f8e3d5e6977ad2d912cf40fbd594"
  },
  {
    "url": "install/index.html",
    "revision": "438cded6ff8d044c105e229b8e039896"
  },
  {
    "url": "settings/index.html",
    "revision": "c6739070d8f8744597a29fc23c810fd7"
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
    "url": "static/images/recording_format.png",
    "revision": "4334142349b8854d936f79aa36d4af81"
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
    "revision": "bb602529da948a472ea4ef2311514a0b"
  },
  {
    "url": "vedajs/index.html",
    "revision": "499d5b3acf92a05c33eb7e7ccc88e4fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, new workbox.strategies.CacheFirst(), 'GET');
