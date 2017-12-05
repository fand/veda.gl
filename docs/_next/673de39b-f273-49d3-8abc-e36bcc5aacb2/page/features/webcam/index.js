
          window.__NEXT_REGISTER_PAGE('/features/webcam', function() {
            var comp = module.exports=webpackJsonp([10],{352:function(a,b,c){a.exports=c(353)},353:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(8),j=d(i),k=c(7);b.default=(0,k.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/features/webcam",article:{en:(0,j.default)("---\ntitle: WebCam Input\n---\n# WebCam Input\n\n<!-- <p class=\"pc-only\">Click this button to see an example of GLSL using WebCam.\n\n<button id=\"enable\">Allow GLSL to use WebCam inputs</button>\n\n</p> -->\n\nVEDA supports WebCam input.\nWhen you add `\"camera\": true` to settings, VEDA enables `sampler2D camera`.\n\n\n<!-- ## Example\n\nThis is the code running on this page (PC only).\n\n```glsl\n/*{ \"camera\": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n``` -->\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) for another example.\n"),ja:(0,j.default)("---\ntitle: Web\u30AB\u30E1\u30E9\n---\n# Web\u30AB\u30E1\u30E9\n\n<!-- <p class=\"pc-only\">\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001Web\u30AB\u30E1\u30E9\u3092\u7528\u3044\u305FGLSL\u8868\u73FE\u306E\u30B5\u30F3\u30D7\u30EB\u304C\u518D\u751F\u3055\u308C\u307E\u3059\u3002\n\n<button id=\"enable\">Web\u30AB\u30E1\u30E9\u306E\u4F7F\u7528\u3092\u8A31\u53EF\u3059\u308B</button>\n\n</p> -->\n\nVEDA\u3067\u306F\u3001Web\u30AB\u30E1\u30E9\u304B\u3089\u306E\u5165\u529B\u3092\u30C6\u30AF\u30B9\u30C1\u30E3\u3068\u3057\u3066\u5229\u7528\u3067\u304D\u307E\u3059\u3002\nSettings\u3067 `\"camera\": true` \u3068\u3059\u308B\u3068\u3001 `sampler2D camera` \u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\n\n\n<!-- ## \u4F8B\n\n\u4EE5\u4E0B\u306F\u3053\u306E\u30DA\u30FC\u30B8\u3092PC\u3067\u958B\u3044\u305F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308BGLSL\u30B3\u30FC\u30C9\u3067\u3059\u3002\n\n```glsl\n/*{ \"camera\": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D camera;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    uv.x = 1. - uv.x;\n    float a = atan(p.y, p.x) * 2.;\n    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);\n    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);\n}\n``` -->\n\n\u4ED6\u306E\u30B3\u30FC\u30C9\u4F8B\u306F [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) \u3092\u898B\u3066\u304F\u3060\u3055\u3044\u3002\n")},shader:{attach:function(a){a.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = time * .3 + 100.;\n\n  p = p * .5 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    .8,\n    1.0\n  ) * .6;\n}\n"),window.addEventListener("click",function(b){"enable"===b.target.id&&(a.setPixelRatio(4),a.toggleCamera(!0),a.loadFragmentShader(shader))})},detach:function(a){a.toggleCamera(!1)}}})})}},[352]);
            return { page: comp.default }
          })
        