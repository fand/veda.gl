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
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/_app.js",
    "revision": "3fa759521bf60feb97ce8d74aad12463"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/_error.js",
    "revision": "5cee781479a71a1905eda34738220046"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/commands.js",
    "revision": "ed13c238ad6a7e78b3de0607b27ca640"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/contributing.js",
    "revision": "b76a7f7611e2215fe1983f2022a1345d"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/faq.js",
    "revision": "7983022eb9019d0471e9f7211283ddb6"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features.js",
    "revision": "40e11f98bcc8e7a52d7a4160b5549121"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/audio.js",
    "revision": "a4c0e52c0f7e7ded0f6e8ce86ac1fb59"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/fragment.js",
    "revision": "f315a5805e2dc4d2841d5bc63564409d"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/gamepad.js",
    "revision": "74c0d40deef1e5454af3ef054f31ac3b"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/image.js",
    "revision": "226493a5c5b5f391bef5f57e867acd03"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/keyboard.js",
    "revision": "64fce9e2da6e32a379f16808cd53ef1e"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/midi.js",
    "revision": "06edafbe5cbedf69b7f17c4440dedf90"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/osc.js",
    "revision": "e01fcc4ab9bc7f437fb71e127da9d3b8"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/recording.js",
    "revision": "4fedd213f4d832c91364fea7779de6ea"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/server.js",
    "revision": "f8b503417276890153b77568cd103ac6"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/vertex.js",
    "revision": "0cbd4a8d95c8d42311db707a9b9747bc"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/video.js",
    "revision": "8e509ec16dd0ee054465da1fafbcf3f9"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/features/webcam.js",
    "revision": "d1871c0436a393a8b57ccf1ca5220ad1"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/index.js",
    "revision": "d415aa9bb6c7d3400b3ec272142f5889"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/install.js",
    "revision": "ac4e41284ed562b1a5b40f51ec19c795"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/parse.js",
    "revision": "2f247073a343265a8d432097894b7144"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/settings.js",
    "revision": "2964a5cd5864fdbfb2ce987d27d8561d"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/usage.js",
    "revision": "e953756f62f2eb087e92790ec230f3dc"
  },
  {
    "url": "_next/static/AstH5ymOe8wvlU6MQojVC/pages/vedajs.js",
    "revision": "279b82442710bb96727f2649f8431c77"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.3013fcec31b90bad9f30.js",
    "revision": "9eaa66003c57a297c05bd1fe1aaa6737"
  },
  {
    "url": "_next/static/development/dll/dll_8ecc1891b6a89739495f.js",
    "revision": "92fd0a86b07b3f0faf578a674dbd5c16"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "3ec74bfa8be6f48f9de80bfb8dc3e475"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "725c1e1edc8f50c418183f985ef863f7"
  },
  {
    "url": "_next/static/development/pages/commands.js",
    "revision": "ed1f3f7cee8a8aa2663c3b64e96065ed"
  },
  {
    "url": "_next/static/development/pages/next/dist/pages/_error.js",
    "revision": "ad42ade1ee794c67232ae9835de827a0"
  },
  {
    "url": "_next/static/runtime/amp.js",
    "revision": "3270ebe44ac9700baec1125302f84499"
  },
  {
    "url": "_next/static/runtime/main-0df88d6239c8399435bb.js",
    "revision": "38649f2fcd26373b155901d53550a651"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "726ab72d1b56776e85c031da8eb19fdf"
  },
  {
    "url": "_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "e530d478b947cd756a8ea9941726e6bb"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "8c183d7ac304cabd0748457df0030e7d"
  },
  {
    "url": "_next/static/webpack/458c360fce5d08d826d8.hot-update.json",
    "revision": "b5eebdffdba8918ee7781d7b826d7e10"
  },
  {
    "url": "_next/static/webpack/e9f0c0c1b0ce44d7ba2d.hot-update.json",
    "revision": "39cdf72847a72fba6f7841579f9f6746"
  },
  {
    "url": "commands/index.html",
    "revision": "7126eb539d5d59ae5e5de84b51c7a8e3"
  },
  {
    "url": "contributing/index.html",
    "revision": "d67b899e25910e4449693262b641f550"
  },
  {
    "url": "faq/index.html",
    "revision": "6431cad2b520a0799d688d4d0cb98799"
  },
  {
    "url": "features/audio/index.html",
    "revision": "727de4c348bd7df21fc5710e19d15d7c"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "f3c5fcfc210e10f05431d9eeb13ace3f"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "b2897bb320f3a3bf41386abc98dee9e9"
  },
  {
    "url": "features/image/index.html",
    "revision": "6607eab6ece0c13a335a5b095306e5ba"
  },
  {
    "url": "features/index.html",
    "revision": "44e28c9b4e7aa747d3ddea6993978e92"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "d840cbc482bb81482cb16622cf1a7ded"
  },
  {
    "url": "features/midi/index.html",
    "revision": "40415dd3c53ad838de3bfb1f08447ec9"
  },
  {
    "url": "features/osc/index.html",
    "revision": "bc341e8868f81225ad87440fecbed257"
  },
  {
    "url": "features/recording/index.html",
    "revision": "48e73be622569927bd6dec7896cbaf34"
  },
  {
    "url": "features/server/index.html",
    "revision": "b7cdb61b868034af4aac67aad8599a9d"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "a32a245b1d6fc43823c6d91e22edc29d"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "0244653c5b838ff2ebe34ee662783964"
  },
  {
    "url": "index.html",
    "revision": "97afb1689b440a648a3a926258ba414a"
  },
  {
    "url": "install/index.html",
    "revision": "04255029ce4993fb3a7904329ddaf6f1"
  },
  {
    "url": "settings/index.html",
    "revision": "4dcd14d8a7c66fe0944aeb79061305e2"
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
    "revision": "c6e6c9ec23af1eceb55061b9a70c8407"
  },
  {
    "url": "vedajs/index.html",
    "revision": "fb6377371dc8b7dea5f693f2be617fa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, new workbox.strategies.CacheFirst(), 'GET');
