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
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/_app.js",
    "revision": "153265cfc0e3d33c7766340103a8afd0"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/_error.js",
    "revision": "5cee781479a71a1905eda34738220046"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/commands.js",
    "revision": "ed13c238ad6a7e78b3de0607b27ca640"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/contributing.js",
    "revision": "b76a7f7611e2215fe1983f2022a1345d"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/faq.js",
    "revision": "5f64eecf44316f3432a062cb8c4df980"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features.js",
    "revision": "40e11f98bcc8e7a52d7a4160b5549121"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/audio.js",
    "revision": "a4c0e52c0f7e7ded0f6e8ce86ac1fb59"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/fragment.js",
    "revision": "f315a5805e2dc4d2841d5bc63564409d"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/gamepad.js",
    "revision": "74c0d40deef1e5454af3ef054f31ac3b"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/image.js",
    "revision": "226493a5c5b5f391bef5f57e867acd03"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/keyboard.js",
    "revision": "64fce9e2da6e32a379f16808cd53ef1e"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/midi.js",
    "revision": "06edafbe5cbedf69b7f17c4440dedf90"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/osc.js",
    "revision": "e01fcc4ab9bc7f437fb71e127da9d3b8"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/recording.js",
    "revision": "4fedd213f4d832c91364fea7779de6ea"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/server.js",
    "revision": "f8b503417276890153b77568cd103ac6"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/vertex.js",
    "revision": "0cbd4a8d95c8d42311db707a9b9747bc"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/video.js",
    "revision": "8e509ec16dd0ee054465da1fafbcf3f9"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/features/webcam.js",
    "revision": "d1871c0436a393a8b57ccf1ca5220ad1"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/index.js",
    "revision": "d415aa9bb6c7d3400b3ec272142f5889"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/install.js",
    "revision": "513aeaeb1d69ccdc6cf700413e3d6178"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/parse.js",
    "revision": "2f247073a343265a8d432097894b7144"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/settings.js",
    "revision": "2964a5cd5864fdbfb2ce987d27d8561d"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/usage.js",
    "revision": "e953756f62f2eb087e92790ec230f3dc"
  },
  {
    "url": "_next/static/acOrFdE6B0da7JkVSxHtH/pages/vedajs.js",
    "revision": "279b82442710bb96727f2649f8431c77"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.9790e1ee3b4a87151580.js",
    "revision": "7d112da328a5ce171a593d4c5faf0595"
  },
  {
    "url": "_next/static/development/dll/dll_7bc611f04f4f15742e11.js",
    "revision": "5fc61204a550852739cce92664783dec"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "b17317ad1054d5bd352a2fe6b1939928"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "a6032b53cf0493c70c37447946531e31"
  },
  {
    "url": "_next/static/development/pages/features/fragment.js",
    "revision": "a1f8fb896c54cd80f393b7d063796a39"
  },
  {
    "url": "_next/static/development/pages/index.js",
    "revision": "44ee1b40a9c0d677bdeeea0a829a4501"
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
    "revision": "953805c5ab88920faf1e15a17fd12883"
  },
  {
    "url": "_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "e530d478b947cd756a8ea9941726e6bb"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "3690d972914c9592eb2b865a1b282132"
  },
  {
    "url": "_next/static/webpack/6ee49589221703fc0fd5.hot-update.json",
    "revision": "06ed269cb1789fabd8993fe4821b5b02"
  },
  {
    "url": "_next/static/webpack/ced9adc10bacaecf66ac.hot-update.json",
    "revision": "037fb23ad09eb95ccf7707a9a3b2864d"
  },
  {
    "url": "commands/index.html",
    "revision": "ee0d8918b277d1e261c77bbda199c822"
  },
  {
    "url": "contributing/index.html",
    "revision": "2baa77752123644448d29f1cf2eb4831"
  },
  {
    "url": "faq/index.html",
    "revision": "d059eb292367d7fbc1c02dbef9f6f874"
  },
  {
    "url": "features/audio/index.html",
    "revision": "b3d55821a4f9eb4892938ef23c9a4994"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "3d13fabe7cfcc556c53fd24b4b47f07d"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "ac5263596b6dbfb9a806aa9e89bf0a01"
  },
  {
    "url": "features/image/index.html",
    "revision": "8189292ff61eb93d8dc9889b4a8069c4"
  },
  {
    "url": "features/index.html",
    "revision": "03af777bba089a9f65f0f327ddfc159f"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "eda5115d2cc25679be31b3bbecb0fddf"
  },
  {
    "url": "features/midi/index.html",
    "revision": "2bb4214feff511d36300134bb034e6d0"
  },
  {
    "url": "features/osc/index.html",
    "revision": "28b1fbca50152ab3627a00ae8a263b9d"
  },
  {
    "url": "features/recording/index.html",
    "revision": "f3258dc5561d06cf705a61d58c607e54"
  },
  {
    "url": "features/server/index.html",
    "revision": "2365c34604f302007887c3183824428a"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "d97651eb2a4760bf1448f8d5b00627e4"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "605bba0ae4ad015dce794e1a0f529522"
  },
  {
    "url": "index.html",
    "revision": "8dee9e8eb99fbd1a3dfda614785b1783"
  },
  {
    "url": "install/index.html",
    "revision": "93ea66f8d811c3e76ac532a54af7188e"
  },
  {
    "url": "settings/index.html",
    "revision": "cea67d8eaaad9b9544b3ddcb31eb47bf"
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
    "revision": "4e441c605e0bc4d3417410f00367fccd"
  },
  {
    "url": "vedajs/index.html",
    "revision": "b7ac62e8b1ae49d55cdc55dd42fbdfaf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, new workbox.strategies.CacheFirst(), 'GET');
