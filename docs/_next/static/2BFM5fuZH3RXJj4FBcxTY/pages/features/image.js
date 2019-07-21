(window.webpackJsonp=window.webpackJsonp||[]).push([["da23"],{gapi:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),i=t.n(a),o=t("/MKj"),r=t("SQ8s"),s=t("o2GN");e.default=Object(o.b)()(function(){return i.a.createElement(r.a,{path:"/features/image",article:{en:Object(s.default)('---\ntitle: Loading Images & Videos\ndescription: How to use images as textures in GLSL with VEDA.js\n---\n# Loading images & videos\n\nVEDA supports loading arbitrary images & video files.\nWhen you add `IMPORTED` to your settings, VEDA load the files and passes them to GLSL as textures.\n\n```js\n{\n  "IMPORTED": {\n    "image1": {\n      "PATH": "./image1.png",\n    },\n    "image2": {\n      "PATH": "https://veda.gl/static/images/2.jpg",\n    },    \n    "video1": {\n      "PATH": "./video1.mov",\n      "SPEED": "2",  // 2倍速で再生される\n    },    \n    "video2": {\n      "PATH": "./video2.mp4",\n      "SPEED": "2",  // 2倍速で再生される\n    },    \n  }    \n}\n```\n\nThe structure of `IMPORTED` is based on [Iteractive Shader Format](https://www.interactiveshaderformat.com/).\n\n\n## Example\n\nThis is the code running on this page (PC only).\nIt\'s executable on VEDA.\n\n```glsl\n/*{\n  "IMPORTED": {\n    "image1": {\n      "PATH": "https://veda.gl/static/images/1.jpg",\n    },\n    "image2": {\n      "PATH": "https://veda.gl/static/images/2.jpg",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n```\n\n\n---\n\nPhoto by [Dick Thomas Johnson - Akihabara](https://www.flickr.com/photos/31029865@N06/23850480454)\n'),ja:Object(s.default)('---\ntitle: 画像/動画のロード\n---\n# 画像/動画をロードする\n\nVEDAでは、任意の画像や動画ファイルをテクスチャとして利用できます。\nSettingの `IMPORTED` に以下の形式でファイル名やURLを指定することで、指定した名前のテクスチャが利用できるようになります。\n\n```js\n{\n  "IMPORTED": {\n    "image1": {\n      "PATH": "./image1.png",\n    },\n    "image2": {\n      "PATH": "https://veda.gl/static/images/2.jpg",\n    },    \n    "video1": {\n      "PATH": "./video1.mov",\n      "SPEED": "2",  // 2倍速で再生される\n    },    \n    "video2": {\n      "PATH": "./video2.mp4",\n      "SPEED": "2",  // 2倍速で再生される\n    },    \n  }    \n}\n```\n\n`IMPORTED` の形式は、VDMX等のVJソフトで用いられる[ISF](https://www.interactiveshaderformat.com/)形式を元にしています。\n\n\n## 例\n\n以下はこのページをPCで開いた時に実行されるGLSLコードです。\nこのコードはVEDA上で実行可能です。\n\n```glsl\n/*{\n  "IMPORTED": {\n    "image1": {\n      "PATH": "https://veda.gl/static/images/1.jpg",\n    },\n    "image2": {\n      "PATH": "https://veda.gl/static/images/2.jpg",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n```\n\n\n---\n\nPhoto by [Dick Thomas Johnson - Akihabara](https://www.flickr.com/photos/31029865@N06/23850480454)\n')},shader:{attach:function(n){n.loadTexture("image1","/static/images/1.jpg"),n.loadTexture("image2","/static/images/2.jpg"),n.loadFragmentShader('/*{\n  "IMPORTED": {\n    "image1": {\n      "PATH": "https://veda.gl/static/images/1.jpg",\n    },\n    "image2": {\n      "PATH": "https://veda.gl/static/images/2.jpg",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n')},detach:function(n){n.unloadTexture("image1","/static/images/1.jpg"),n.unloadTexture("image2","/static/images/2.jpg")}}})})},kDgn:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/image",function(){var n=t("gapi");return{page:n.default||n}}])}},[["kDgn","5d41","9da1"]]]);