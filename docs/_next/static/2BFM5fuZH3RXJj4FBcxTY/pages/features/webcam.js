(window.webpackJsonp=window.webpackJsonp||[]).push([["de38"],{h2Fj:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/webcam",function(){var n=a("sEZn");return{page:n.default||n}}])},sEZn:function(n,e,a){"use strict";a.r(e);var o=a("q1tI"),t=a.n(o),r=a("/MKj"),i=a("SQ8s"),m=a("o2GN");e.default=Object(r.b)()(function(){return t.a.createElement(i.a,{path:"/features/webcam",article:{en:Object(m.default)('---\ntitle: WebCam Input\n---\n# WebCam Input\n\n<p class="pc-only">Click this button to see an example of GLSL using WebCam.\n\n<button id="enable">Allow GLSL to use WebCam inputs</button>\n\n</p>\n\nVEDA supports WebCam input.\nWhen you add `"camera": true` to settings, VEDA enables `sampler2D camera`.\n\n\n## Example\n\nThis is the code running on this page (PC only).\n\n```glsl\n/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n```\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) for another example.\n'),ja:Object(m.default)('---\ntitle: Webカメラ\n---\n# Webカメラ\n\n<p class="pc-only">以下のボタンを押すと、Webカメラを用いたGLSL表現のサンプルが再生されます。\n\n<button id="enable">Webカメラの使用を許可する</button>\n\n</p>\n\nVEDAでは、Webカメラからの入力をテクスチャとして利用できます。\nSettingsで `"camera": true` とすると、 `sampler2D camera` が利用できるようになります。\n\n\n## 例\n\n以下はこのページをPCで開いた時に実行されるGLSLコードです。\nVEDAでそのまま実行できるので、ぜひお試しください！\n\n```glsl\n/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n```\n\n他のコード例は [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) を見てください。\n')},shader:{attach:function(n){n.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = mod(time * .2 + 100., 200.);\n\n  p = p * .6 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    0.8,\n    1.0\n  ) * .6;\n}\n"),window.addEventListener("click",function(e){"enable"===e.target.id&&(n.setPixelRatio(4),n.toggleCamera(!0),n.loadFragmentShader('/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n'))})},detach:function(n){n.toggleCamera(!1)}}})})}},[["h2Fj","5d41","9da1"]]]);