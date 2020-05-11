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
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/_app.js",
    "revision": "3fa759521bf60feb97ce8d74aad12463"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/_error.js",
    "revision": "5cee781479a71a1905eda34738220046"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/commands.js",
    "revision": "ed13c238ad6a7e78b3de0607b27ca640"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/contributing.js",
    "revision": "b76a7f7611e2215fe1983f2022a1345d"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/faq.js",
    "revision": "7983022eb9019d0471e9f7211283ddb6"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features.js",
    "revision": "40e11f98bcc8e7a52d7a4160b5549121"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/audio.js",
    "revision": "a4c0e52c0f7e7ded0f6e8ce86ac1fb59"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/fragment.js",
    "revision": "f315a5805e2dc4d2841d5bc63564409d"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/gamepad.js",
    "revision": "74c0d40deef1e5454af3ef054f31ac3b"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/image.js",
    "revision": "226493a5c5b5f391bef5f57e867acd03"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/keyboard.js",
    "revision": "64fce9e2da6e32a379f16808cd53ef1e"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/midi.js",
    "revision": "06edafbe5cbedf69b7f17c4440dedf90"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/osc.js",
    "revision": "e01fcc4ab9bc7f437fb71e127da9d3b8"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/recording.js",
    "revision": "4fedd213f4d832c91364fea7779de6ea"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/server.js",
    "revision": "f8b503417276890153b77568cd103ac6"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/vertex.js",
    "revision": "0cbd4a8d95c8d42311db707a9b9747bc"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/video.js",
    "revision": "8e509ec16dd0ee054465da1fafbcf3f9"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/features/webcam.js",
    "revision": "d1871c0436a393a8b57ccf1ca5220ad1"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/index.js",
    "revision": "d415aa9bb6c7d3400b3ec272142f5889"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/install.js",
    "revision": "7db961035debe49150ea077228d9ccc3"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/parse.js",
    "revision": "2f247073a343265a8d432097894b7144"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/settings.js",
    "revision": "2964a5cd5864fdbfb2ce987d27d8561d"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/usage.js",
    "revision": "e953756f62f2eb087e92790ec230f3dc"
  },
  {
    "url": "_next/static/31nJc8abx3ycM0uwROUzR/pages/vedajs.js",
    "revision": "279b82442710bb96727f2649f8431c77"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.f5b19ce59bebe2febd8a.js",
    "revision": "e8f19c1abcdc0e31204145fb963be360"
  },
  {
    "url": "_next/static/development/dll/dll_7bc611f04f4f15742e11.js",
    "revision": "5fc61204a550852739cce92664783dec"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "700d20104bd297afed4c6b02eac90ade"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "a6032b53cf0493c70c37447946531e31"
  },
  {
    "url": "_next/static/development/pages/features/keyboard.js",
    "revision": "3b051b4caa70d3ca9b9f1b7c6a8a65ea"
  },
  {
    "url": "_next/static/development/pages/features/webcam.js",
    "revision": "73221109935bdc03d565710c0d248ff7"
  },
  {
    "url": "_next/static/development/pages/settings.js",
    "revision": "a795bd9286e0c8f245c9784e3cc23d55"
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
    "revision": "bb209d774cef137cf6f1a3aa09e33179"
  },
  {
    "url": "_next/static/webpack/0dba2f54b21b5da9d668.hot-update.json",
    "revision": "2998447b86e40b93e0cee9f3ace9f2b6"
  },
  {
    "url": "_next/static/webpack/131e68b25ea4b7a82361.hot-update.json",
    "revision": "73fcb7d528eed3a3d3a47ed9a57d7e26"
  },
  {
    "url": "_next/static/webpack/1b39228851ea4dd3754d.hot-update.json",
    "revision": "e56a0c47bc93a59f6f4d065f5c3b6e13"
  },
  {
    "url": "_next/static/webpack/25ccc6db8b1f62d53ab0.hot-update.json",
    "revision": "77b9aafafb0b053917938b0dfbe77b97"
  },
  {
    "url": "_next/static/webpack/2caa29e9944abeed70f4.hot-update.json",
    "revision": "6df87b9c54117993af763f2d6219c1e1"
  },
  {
    "url": "_next/static/webpack/4263bb2fdbce1d9951f2.hot-update.json",
    "revision": "9835ffc54e5afdbef189f7efdde10058"
  },
  {
    "url": "_next/static/webpack/58d4ec51ec9dfe691958.hot-update.json",
    "revision": "f7d2d7d0a81a92a548bac25145779b48"
  },
  {
    "url": "_next/static/webpack/6bee20bc6a1368332db4.hot-update.json",
    "revision": "008a2f1b733f2e94a7561cf8744b5f56"
  },
  {
    "url": "_next/static/webpack/888c451744df235e97de.hot-update.json",
    "revision": "c48f8b130dde2560c736bb6559180507"
  },
  {
    "url": "_next/static/webpack/c1f665168924043e128d.hot-update.json",
    "revision": "6637e54a9c6d2b558d5ff08780c7cdf8"
  },
  {
    "url": "_next/static/webpack/ec3d8a5084bdbabfb75e.hot-update.json",
    "revision": "938d9e6884f26ce016491828c1e0d5c1"
  },
  {
    "url": "_next/static/webpack/fb6af1e0328d83540596.hot-update.json",
    "revision": "a9202e8d4855d9a0d3250c85bfb858c3"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/keyboard.js.1b39228851ea4dd3754d.hot-update.js",
    "revision": "33e2a9aa0be5cb5d0df901db55f0e634"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/keyboard.js.4263bb2fdbce1d9951f2.hot-update.js",
    "revision": "09bb17fa389114c2c853a28b788e304a"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/keyboard.js.58d4ec51ec9dfe691958.hot-update.js",
    "revision": "fc8711f80be9ce65e50d2bfced9fe245"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/keyboard.js.6bee20bc6a1368332db4.hot-update.js",
    "revision": "92bbdbc91847355f36afbf7d97557025"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/webcam.js.1b39228851ea4dd3754d.hot-update.js",
    "revision": "a099852b248e5d8b393fd1bad008cc23"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/webcam.js.4263bb2fdbce1d9951f2.hot-update.js",
    "revision": "5c651a94cee367be8fd79486012b8ca7"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/webcam.js.58d4ec51ec9dfe691958.hot-update.js",
    "revision": "231b299cec7e7cb0d3edf4b432a8f6f3"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/webcam.js.6bee20bc6a1368332db4.hot-update.js",
    "revision": "11d7d2793342a7c81633f21ada8be9a8"
  },
  {
    "url": "commands/index.html",
    "revision": "b287633d4e53b38a1b41dd856b2cdf9a"
  },
  {
    "url": "contributing/index.html",
    "revision": "58f5bcac2bb5fb7225c15aa8efa01dfa"
  },
  {
    "url": "faq/index.html",
    "revision": "dfca26e4a866bf4770460d4122a0d3c6"
  },
  {
    "url": "features/audio/index.html",
    "revision": "4e9e4e4df1aa041ce247fd0c0f306eb2"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "fb99fc329e9f6b8824bc23df212b39d3"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "58866352ea6157c547f326cf3b6b8157"
  },
  {
    "url": "features/image/index.html",
    "revision": "95b9c17b1513aadf377cc63e1cbc31d9"
  },
  {
    "url": "features/index.html",
    "revision": "f74381a709152587537d627d26827a80"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "4c49b4cc21db5ee037b1037048eab315"
  },
  {
    "url": "features/midi/index.html",
    "revision": "1a7aee886fab4ddd2539744aeefba250"
  },
  {
    "url": "features/osc/index.html",
    "revision": "924ad4fd9f3becbd280249e89e82750d"
  },
  {
    "url": "features/recording/index.html",
    "revision": "c3780f21f8501329fa3357db4956f326"
  },
  {
    "url": "features/server/index.html",
    "revision": "af22d673a1005d7e1d5930e1a0f66dfb"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "c7bed1b19a7caa00458b8a1e8490de8d"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "4d39b402bdfc527ddb1abd11a1275b5e"
  },
  {
    "url": "index.html",
    "revision": "d936926ee46008c0fd248fb576b2ff19"
  },
  {
    "url": "install/index.html",
    "revision": "9b713a4ff43c8d40f82bbfab4b89cfa3"
  },
  {
    "url": "settings/index.html",
    "revision": "0b77336ffba87ea5ffb933ee04dc92ab"
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
    "revision": "33a45817e74d3f1408dc12968cf1fad5"
  },
  {
    "url": "vedajs/index.html",
    "revision": "29b49d5131187abaa94a05452b4c68b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, new workbox.strategies.CacheFirst(), 'GET');
