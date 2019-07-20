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
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/_app.js",
    "revision": "1c63163c5eb6543f529bdc1c3f80fd15"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/_error.js",
    "revision": "8c77fdab3a2df2b0c2bebb479c666a1f"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/commands.js",
    "revision": "bd4365b8569266e5f950ba959bd8a350"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/contributing.js",
    "revision": "eaae22361aad9309d2a6ae83702cc9a4"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/faq.js",
    "revision": "ed62b07d175659d7180e4c9f6b6c2ffb"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features.js",
    "revision": "d9039fc5f864f6eee2e6485267905cf7"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/audio.js",
    "revision": "503497d537c5cba859bea89c997f3a68"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/fragment.js",
    "revision": "c34ff1e13bd5ae091e63a74abef26fb9"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/gamepad.js",
    "revision": "06a8964f42e814cdab566ea63cb5e71a"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/image.js",
    "revision": "9c96620950908dc624e3f99baafb76ae"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/keyboard.js",
    "revision": "884ee92f8af5bd69f2062fe8c4d46d38"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/midi.js",
    "revision": "e671bbcb7160528e2f86cdb6d6448b5c"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/osc.js",
    "revision": "8fb5d572ec337dc9138d084f7af9f8f2"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/recording.js",
    "revision": "93d984efe1e7264a45fde717b9376a64"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/server.js",
    "revision": "8bd73bb6fc26c802276c90ab72a19042"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/vertex.js",
    "revision": "a7f91aa562863188bcd59aa62756845f"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/video.js",
    "revision": "9565bfaff90cdd5b29eb395b34c17734"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/features/webcam.js",
    "revision": "7bea61bb85af4692e9f141e099947a87"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/index.js",
    "revision": "fa38d773db0ae0294d9b404684970fd2"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/install.js",
    "revision": "f50b1bb0b877ab1cd368b2137a8863ab"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/parse.js",
    "revision": "7b734deaa32be79afabfe3f580e980f3"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/settings.js",
    "revision": "e9fe3c02ad3bbd9bbedba5682d2c022b"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/usage.js",
    "revision": "54c58efe8e76d7cbb7a96e45b1b23e2c"
  },
  {
    "url": "_next/static/1EMnlulmtvsiuNm6vr7XK/pages/vedajs.js",
    "revision": "f1c7f39a9ba8620c489d996c1901d568"
  },
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
    "url": "_next/static/chunks/commons.1e34861d0e9df9764b4f.js",
    "revision": "ad104da6098257fb8f1290c6b9158e48"
  },
  {
    "url": "_next/static/chunks/commons.d2e0a90b4ec31f9cbad3.js",
    "revision": "06bf8fc82af793f4c76bdc1a61ce4a63"
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
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/_app.js",
    "revision": "57e6b9ee1aeec3a140f8e38e16c7b9a5"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/_error.js",
    "revision": "303be26626bbb71325adae7d3467a797"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/commands.js",
    "revision": "e12e4bfdc623eb5e8841573b5084fd70"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/contributing.js",
    "revision": "53b8b101aded49317def40148539db7b"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/faq.js",
    "revision": "f174f30d4a8a58b44d6a09b0c9eb5de6"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features.js",
    "revision": "917dde88c04af0a861521c86c6cffecb"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/audio.js",
    "revision": "0f47a08ff6ba2e464e337e6dc8cc4824"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/fragment.js",
    "revision": "3d00d0efcbb3ade55a0f9d4497fbcb99"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/gamepad.js",
    "revision": "1593d9b99759feb3fd115a970a4d6193"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/image.js",
    "revision": "bd2cf4f971a5c24227d741bf7b3606ba"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/keyboard.js",
    "revision": "c42c4965ab3d3e60e618c8313a54839f"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/midi.js",
    "revision": "3bb01eb2a479377fb0bd296a1588b14f"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/osc.js",
    "revision": "65d5705c3abfb3e95adacd226565106e"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/recording.js",
    "revision": "6bcb663182078da6e1fc316de40ce223"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/server.js",
    "revision": "a83ec60cc9ab2280054c6379dc50be50"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/vertex.js",
    "revision": "2702b5ca4e8a66580aaccbbe73ebca2b"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/video.js",
    "revision": "ba01ccd8ab1cce9a7c67f31123740251"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/features/webcam.js",
    "revision": "04d7373a13752b8b5c9ef24a4b3ab6d4"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/index.js",
    "revision": "54ba9dbb8ec86caa7d3bc2c1d5756d13"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/install.js",
    "revision": "dd66fca0812ab3c334f8743e0927666f"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/parse.js",
    "revision": "806150718457675c3f4f75c9737f535d"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/settings.js",
    "revision": "ba64ce7ef4035d3461f9204ddc56af6a"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/usage.js",
    "revision": "5506f52999108c9170a143fcb5523f36"
  },
  {
    "url": "_next/static/Gg-OlsUsfeHPIdCanJxvz/pages/vedajs.js",
    "revision": "3f3ef5d84ba0d534f06a275e4d45047d"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/_app.js",
    "revision": "57e6b9ee1aeec3a140f8e38e16c7b9a5"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/_error.js",
    "revision": "303be26626bbb71325adae7d3467a797"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/commands.js",
    "revision": "e12e4bfdc623eb5e8841573b5084fd70"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/contributing.js",
    "revision": "53b8b101aded49317def40148539db7b"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/faq.js",
    "revision": "f174f30d4a8a58b44d6a09b0c9eb5de6"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features.js",
    "revision": "917dde88c04af0a861521c86c6cffecb"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/audio.js",
    "revision": "0f47a08ff6ba2e464e337e6dc8cc4824"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/fragment.js",
    "revision": "3d00d0efcbb3ade55a0f9d4497fbcb99"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/gamepad.js",
    "revision": "1593d9b99759feb3fd115a970a4d6193"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/image.js",
    "revision": "bd2cf4f971a5c24227d741bf7b3606ba"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/keyboard.js",
    "revision": "c42c4965ab3d3e60e618c8313a54839f"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/midi.js",
    "revision": "3bb01eb2a479377fb0bd296a1588b14f"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/osc.js",
    "revision": "65d5705c3abfb3e95adacd226565106e"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/recording.js",
    "revision": "6bcb663182078da6e1fc316de40ce223"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/server.js",
    "revision": "38c0489e9d4c09586d16cc95eafdc983"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/vertex.js",
    "revision": "2702b5ca4e8a66580aaccbbe73ebca2b"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/video.js",
    "revision": "ba01ccd8ab1cce9a7c67f31123740251"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/features/webcam.js",
    "revision": "04d7373a13752b8b5c9ef24a4b3ab6d4"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/index.js",
    "revision": "54ba9dbb8ec86caa7d3bc2c1d5756d13"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/install.js",
    "revision": "dd66fca0812ab3c334f8743e0927666f"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/parse.js",
    "revision": "806150718457675c3f4f75c9737f535d"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/settings.js",
    "revision": "ba64ce7ef4035d3461f9204ddc56af6a"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/usage.js",
    "revision": "5506f52999108c9170a143fcb5523f36"
  },
  {
    "url": "_next/static/IBjGF4CCvFWTRL3KYiT1B/pages/vedajs.js",
    "revision": "3f3ef5d84ba0d534f06a275e4d45047d"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/_app.js",
    "revision": "c6de929d602068e3123f7a315d0e55df"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/_error.js",
    "revision": "a5c1ed0610795a16a521b26b323c3686"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/commands.js",
    "revision": "ff421c742b17ef8a1259a34a107f6a83"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/contributing.js",
    "revision": "3560a6767265c2812ea8da0205f778a0"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/faq.js",
    "revision": "c8b4d65f41edc1dc51adf0b4c922fedc"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features.js",
    "revision": "af47d7e1b60d267d329ac8d2d6aa21dc"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/audio.js",
    "revision": "8d9051b33dbc2f60deb42e9b2ca7805f"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/fragment.js",
    "revision": "1c8343a9cae65bd0d5b4052453ed68a9"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/gamepad.js",
    "revision": "176e82e8dcd30341b803fa6619171b71"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/image.js",
    "revision": "43dddb0d40500ad80b4fc679ba70cc97"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/keyboard.js",
    "revision": "2abf9886607c1988bbf730ffe5afa4bd"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/midi.js",
    "revision": "f988916544acdb0614f013c67e021a38"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/osc.js",
    "revision": "f4b9c203135c6022167a3a0f9d3ec1fe"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/recording.js",
    "revision": "351b2b31dab55dec15774f4779060dd0"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/server.js",
    "revision": "8e0e3882c1d18c6f99c360f497569176"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/vertex.js",
    "revision": "2061ad80d5835d78d512b27d77c52e70"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/video.js",
    "revision": "d76ab42247c3460fdf409231c37a4c8e"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/features/webcam.js",
    "revision": "feb71f4e3b27b1ac42b1068273d23988"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/index.js",
    "revision": "fb8fe947ed39d4c3261cf8b3ac60166d"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/install.js",
    "revision": "98f218fe224de8066313fb5bcae7343d"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/parse.js",
    "revision": "e601130b6aaba09be0ea50cf3148d5ab"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/settings.js",
    "revision": "8ae5c3b8d0729b09860d2f2ec11b83c7"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/usage.js",
    "revision": "7706b68719bcad03e4666be33f42272a"
  },
  {
    "url": "_next/static/jNegxwHZruun8ZfOY9lLs/pages/vedajs.js",
    "revision": "70c46dee618b16fcfe82176240d32f55"
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
    "url": "_next/static/runtime/main-77744271c7e262fce107.js",
    "revision": "a2aad0f4442c480b0e5e9ec89afb9bff"
  },
  {
    "url": "_next/static/runtime/main-811190bfa956fd6befeb.js",
    "revision": "ad77244f811b777d66b11e907666543b"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "27ff06fa520ffeb93a56bc6529ace6ec"
  },
  {
    "url": "_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "3e44118e4b15620065eb34bd349f2c62"
  },
  {
    "url": "_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "e530d478b947cd756a8ea9941726e6bb"
  },
  {
    "url": "_next/static/runtime/webpack-c116b8d435dd0d4773a0.js",
    "revision": "7ffb16378bce9c747a3da7aa91a9ec5b"
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
    "revision": "0ef97edd41bf69460b037fbe4feca7f0"
  },
  {
    "url": "contributing/index.html",
    "revision": "d16f5ff5bb978f0b61b47c48346925a6"
  },
  {
    "url": "faq/index.html",
    "revision": "d15e29b030cdba20d7a43cbaddba355a"
  },
  {
    "url": "features/audio/index.html",
    "revision": "4cb805ea4cf06e86a31625a381a09067"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "6f6dbe19a274a73c7bbd4123d2e0ff78"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "6d249b27b59b21b5ae65f45bc11691dd"
  },
  {
    "url": "features/image/index.html",
    "revision": "3814697bfc3ed6d1ed2bc1223e797c5e"
  },
  {
    "url": "features/index.html",
    "revision": "a9a38a24e4b8c63c231d9856a9e22ad0"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "7a4dcdea388290dbf9a2a03d2cd12f9d"
  },
  {
    "url": "features/midi/index.html",
    "revision": "b561a2247a187104ee48f3c83f5a12cf"
  },
  {
    "url": "features/osc/index.html",
    "revision": "2c2dd953af0a7b616f9d447622963ec7"
  },
  {
    "url": "features/recording/index.html",
    "revision": "83a7ce5b993e9dbfca6863373ed3b65d"
  },
  {
    "url": "features/server/index.html",
    "revision": "0a72e72c26ed39ff2941cb14d9e05d70"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "834126cd77a0dd8e142e15b441a8f0f6"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "7d155b54cf5aa760d34e41f4cb283b07"
  },
  {
    "url": "index.html",
    "revision": "231d34d8ab36420c91cc7e8300e351b1"
  },
  {
    "url": "install/index.html",
    "revision": "77e04db127e7b656ca5331c690c26209"
  },
  {
    "url": "settings/index.html",
    "revision": "bfeeda71b092f4185708448572084552"
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
    "revision": "821061167a75db9dadc0ecd986fbf79b"
  },
  {
    "url": "vedajs/index.html",
    "revision": "892f4aacd840382afc7b7942c4b6bb37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, new workbox.strategies.CacheFirst(), 'GET');
