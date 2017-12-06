
          window.__NEXT_REGISTER_PAGE('/features/audio', function() {
            var comp = module.exports=webpackJsonp([18],{335:function(a,b,c){a.exports=c(336)},336:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(8),j=d(i),k=c(7);b.default=(0,k.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/features/audio",article:{en:(0,j.default)("---\ntitle: Audio Input\n---\n# Audio Input\n\n<p class=\"pc-only\">Click this button to see an example of GLSL using audio inputs.\n\n<button id=\"enable\">Allow GLSL to use audio inputs</button>\n\n</p>\n\nVEDA supports audio input.\nWhen you set `audio: true` in [Settings](/settings), VEDA enables following uniform variables:\n\n- `float volume`\n- `sampler2D samples`\n- `sampler2D spectrum`\n\n`sampler2D samples` stores the most recent 256 frames from the audio input.\nThis is useful for drawing waveforms.\n\n`sampler2D spectrum` stores the FFT result.\nThis is useful to draw the volume of specific frequency band, such as spectrum visualizer.\n\n`float volume` is the average of all the frequency bands in `spectrum`.\n\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/audio.frag) for more details.\n\n## Example\n\nThis is the code running on this page (PC only).\n\n```glsl\n/*{ \"audio\": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) { ... }\nfloat noise (in vec2 st) { ... }\nfloat fbm(in vec2 p) { ... }\nvec2 rotate(vec2 p, float t) { ... }\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n```\n"),ja:(0,j.default)("---\ntitle: \u97F3\u58F0\u5165\u529B\n---\n# \u97F3\u58F0\u5165\u529B\n\n<p class=\"pc-only\">\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u97F3\u58F0\u5165\u529B\u306B\u3088\u308BGLSL\u8868\u73FE\u306E\u30B5\u30F3\u30D7\u30EB\u304C\u518D\u751F\u3055\u308C\u307E\u3059\u3002\n\n<button id=\"enable\">\u97F3\u58F0\u5165\u529B\u306E\u4F7F\u7528\u3092\u8A31\u53EF\u3059\u308B</button>\n\n</p>\n\nVEDA\u3067\u306F\u3001\u97F3\u58F0\u5165\u529B\u304B\u3089\u306E\u30C7\u30FC\u30BF\u3092GLSL\u4E0A\u3067\u5229\u7528\u3067\u304D\u307E\u3059\u3002\n[Settings](/settings?lang=ja)\u3067 `\"audio\": true` \u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306Euniform\u5909\u6570\u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\n\n- `float volume`\n- `sampler2D samples`\n- `sampler2D spectrum`\n\n`sampler2D samples` \u306B\u306F\u3001\u97F3\u58F0\u5165\u529B\u306E\u76F4\u8FD1256\u30B5\u30F3\u30D7\u30EB\u306E\u5024\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n\u6CE2\u5F62\u306E\u63CF\u753B\u306A\u3069\u306B\u5229\u7528\u3067\u304D\u307E\u3059\u3002\n\n`sampler2D spectrum` \u306B\u306FFFT\u306E\u7D50\u679C\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002\n\u30B9\u30DA\u30AF\u30C8\u30E9\u30E0\u30A2\u30CA\u30E9\u30A4\u30B6\u30FC\u7B49\u3001\u7279\u5B9A\u306E\u5468\u6CE2\u6570\u5E2F\u306E\u5024\u3092\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\n`float volume` \u306F\u3001`spectrum` \u306B\u304A\u3051\u308B\u5168\u5468\u6CE2\u6570\u5E2F\u3067\u306E\u30DC\u30EA\u30E5\u30FC\u30E0\u306E\u5E73\u5747\u306E\u5024\u3067\u3059\u3002\n\n\u8A73\u3057\u304F\u306F[examples](https://github.com/fand/veda/blob/master/examples/audio.frag)\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002\n\n## \u4F8B\n\n\u4EE5\u4E0B\u306F\u3053\u306E\u30DA\u30FC\u30B8\u3092PC\u3067\u958B\u3044\u305F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308BGLSL\u30B3\u30FC\u30C9\u3067\u3059\u3002\n\n```glsl\n/*{ \"audio\": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) { /* \u7701\u7565 */ }\nfloat noise (in vec2 st) { /* \u7701\u7565 */ }\nfloat fbm(in vec2 p) { /* \u7701\u7565 */ }\nvec2 rotate(vec2 p, float t) { /* \u7701\u7565 */ }\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n```\n")},shader:{attach:function(a){a.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = time * .3 + 100.;\n\n  p = p * .5 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    .8,\n    1.0\n  ) * .6;\n}\n"),window.addEventListener("click",function(b){"enable"===b.target.id&&(a.toggleAudio(!0),a.loadFragmentShader("/*{ \"audio\": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n  return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(in vec2 p) {\n  return (\n    noise(p * 1.7 + .13) * .5 +\n    noise(p * 2.9 + .23) * .25 +\n    noise(p * 3.7 + .31) * .125 +\n    noise(p * 15.7 + .19) * .125\n  );\n}\n\nvec2 rotate(vec2 p, float t) {\n  return mat2(\n    sin(t), -cos(t),\n    cos(t), sin(t)\n  ) * p;\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n"))})},detach:function(a){a.toggleAudio(!1)}}})})}},[335]);
            return { page: comp.default }
          })
        