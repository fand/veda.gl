(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ZyFc:function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t.n(o),a=t("/MKj"),i=t("SQ8s"),u=t("o2GN");e.default=Object(a.b)()(function(){return r.a.createElement(i.a,{path:"/features/audio",article:{en:Object(u.default)('---\ntitle: Audio Input\n---\n# Audio Input\n\n<p class="pc-only">Click this button to see an example of GLSL using audio inputs.\n\n<button id="enable">Allow GLSL to use audio inputs</button>\n\n</p>\n\nVEDA supports audio input.\nWhen you set `audio: true` in [Settings](/settings), VEDA enables following uniform variables:\n\n- `float volume`\n- `sampler2D samples`\n- `sampler2D spectrum`\n\n`sampler2D samples` stores the most recent 256 frames from the audio input.\nThis is useful for drawing waveforms.\n\n`sampler2D spectrum` stores the FFT result.\nThis is useful to draw the volume of specific frequency band, such as spectrum visualizer.\n\n`float volume` is the average of all the frequency bands in `spectrum`.\n\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/audio.frag) for more details.\n\n## Example\n\nThis is the code running on this page (PC only).\n\n```glsl\n/*{ "audio": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) { ... }\nfloat noise (in vec2 st) { ... }\nfloat fbm(in vec2 p) { ... }\nvec2 rotate(vec2 p, float t) { ... }\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n```\n'),ja:Object(u.default)('---\ntitle: \u97f3\u58f0\u5165\u529b\n---\n# \u97f3\u58f0\u5165\u529b\n\n<p class="pc-only">\u4ee5\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u97f3\u58f0\u5165\u529b\u306b\u3088\u308bGLSL\u8868\u73fe\u306e\u30b5\u30f3\u30d7\u30eb\u304c\u518d\u751f\u3055\u308c\u307e\u3059\u3002\n\n<button id="enable">\u97f3\u58f0\u5165\u529b\u306e\u4f7f\u7528\u3092\u8a31\u53ef\u3059\u308b</button>\n\n</p>\n\nVEDA\u3067\u306f\u3001\u97f3\u58f0\u5165\u529b\u304b\u3089\u306e\u30c7\u30fc\u30bf\u3092GLSL\u4e0a\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n[Settings](/settings?lang=ja)\u3067 `"audio": true` \u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306euniform\u5909\u6570\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\n- `float volume`\n- `sampler2D samples`\n- `sampler2D spectrum`\n\n`sampler2D samples` \u306b\u306f\u3001\u97f3\u58f0\u5165\u529b\u306e\u76f4\u8fd1256\u30b5\u30f3\u30d7\u30eb\u306e\u5024\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u6ce2\u5f62\u306e\u63cf\u753b\u306a\u3069\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002\n\n`sampler2D spectrum` \u306b\u306fFFT\u306e\u7d50\u679c\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u30b9\u30da\u30af\u30c8\u30e9\u30e0\u30a2\u30ca\u30e9\u30a4\u30b6\u30fc\u7b49\u3001\u7279\u5b9a\u306e\u5468\u6ce2\u6570\u5e2f\u306e\u5024\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\n`float volume` \u306f\u3001`spectrum` \u306b\u304a\u3051\u308b\u5168\u5468\u6ce2\u6570\u5e2f\u3067\u306e\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u5e73\u5747\u306e\u5024\u3067\u3059\u3002\n\n\u8a73\u3057\u304f\u306f[examples](https://github.com/fand/veda/blob/master/examples/audio.frag)\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002\n\n## \u4f8b\n\n\u4ee5\u4e0b\u306f\u3053\u306e\u30da\u30fc\u30b8\u3092PC\u3067\u958b\u3044\u305f\u6642\u306b\u5b9f\u884c\u3055\u308c\u308bGLSL\u30b3\u30fc\u30c9\u3067\u3059\u3002\n\n```glsl\n/*{ "audio": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) { /* \u7701\u7565 */ }\nfloat noise (in vec2 st) { /* \u7701\u7565 */ }\nfloat fbm(in vec2 p) { /* \u7701\u7565 */ }\nvec2 rotate(vec2 p, float t) { /* \u7701\u7565 */ }\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n```\n')},shader:{attach:function(n){n.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = mod(time * .2 + 100., 200.);\n\n  p = p * .6 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    0.8,\n    1.0\n  ) * .6;\n}\n"),window.addEventListener("click",function(e){"enable"===e.target.id&&(n.toggleAudio(!0),n.loadFragmentShader('/*{ "audio": true }*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D spectrum;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n  return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nfloat fbm(in vec2 p) {\n  return (\n    noise(p * 1.7 + .13) * .5 +\n    noise(p * 2.9 + .23) * .25 +\n    noise(p * 3.7 + .31) * .125 +\n    noise(p * 15.7 + .19) * .125\n  );\n}\n\nvec2 rotate(vec2 p, float t) {\n  return mat2(\n    sin(t), -cos(t),\n    cos(t), sin(t)\n  ) * p;\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  vec2 uv = gl_FragCoord.xy / resolution;\n\n  float a = atan(p.y, p.x);\n  float l = length(p);\n  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;\n\n  p = vec2(length(p - .1));\n  p -= time * .3;\n\n  gl_FragColor = vec4(\n    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,\n    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,\n    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,\n    1.\n  ) + texture2D(backbuffer, uv)*.8;\n}\n'))})},detach:function(n){n.toggleAudio(!1)}}})})},qXRG:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/audio",function(){var n=t("ZyFc");return{page:n.default||n}}])}},[["qXRG",1,0]]]);