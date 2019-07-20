(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{h2Fj:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/webcam",function(){var n=a("sEZn");return{page:n.default||n}}])},sEZn:function(n,e,a){"use strict";a.r(e);var o=a("q1tI"),t=a.n(o),r=a("/MKj"),i=a("SQ8s"),m=a("o2GN");e.default=Object(r.b)()(function(){return t.a.createElement(i.a,{path:"/features/webcam",article:{en:Object(m.default)('---\ntitle: WebCam Input\n---\n# WebCam Input\n\n<p class="pc-only">Click this button to see an example of GLSL using WebCam.\n\n<button id="enable">Allow GLSL to use WebCam inputs</button>\n\n</p>\n\nVEDA supports WebCam input.\nWhen you add `"camera": true` to settings, VEDA enables `sampler2D camera`.\n\n\n## Example\n\nThis is the code running on this page (PC only).\n\n```glsl\n/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n```\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) for another example.\n'),ja:Object(m.default)('---\ntitle: Web\u30ab\u30e1\u30e9\n---\n# Web\u30ab\u30e1\u30e9\n\n<p class="pc-only">\u4ee5\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001Web\u30ab\u30e1\u30e9\u3092\u7528\u3044\u305fGLSL\u8868\u73fe\u306e\u30b5\u30f3\u30d7\u30eb\u304c\u518d\u751f\u3055\u308c\u307e\u3059\u3002\n\n<button id="enable">Web\u30ab\u30e1\u30e9\u306e\u4f7f\u7528\u3092\u8a31\u53ef\u3059\u308b</button>\n\n</p>\n\nVEDA\u3067\u306f\u3001Web\u30ab\u30e1\u30e9\u304b\u3089\u306e\u5165\u529b\u3092\u30c6\u30af\u30b9\u30c1\u30e3\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u3059\u3002\nSettings\u3067 `"camera": true` \u3068\u3059\u308b\u3068\u3001 `sampler2D camera` \u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\n\n## \u4f8b\n\n\u4ee5\u4e0b\u306f\u3053\u306e\u30da\u30fc\u30b8\u3092PC\u3067\u958b\u3044\u305f\u6642\u306b\u5b9f\u884c\u3055\u308c\u308bGLSL\u30b3\u30fc\u30c9\u3067\u3059\u3002\nVEDA\u3067\u305d\u306e\u307e\u307e\u5b9f\u884c\u3067\u304d\u308b\u306e\u3067\u3001\u305c\u3072\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\uff01\n\n```glsl\n/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n```\n\n\u4ed6\u306e\u30b3\u30fc\u30c9\u4f8b\u306f [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) \u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002\n')},shader:{attach:function(n){n.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = mod(time * .2 + 100., 200.);\n\n  p = p * .6 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    0.8,\n    1.0\n  ) * .6;\n}\n"),window.addEventListener("click",function(e){"enable"===e.target.id&&(n.setPixelRatio(4),n.toggleCamera(!0),n.loadFragmentShader('/*{ "camera": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n'))})},detach:function(n){n.toggleCamera(!1)}}})})}},[["h2Fj",1,0]]]);