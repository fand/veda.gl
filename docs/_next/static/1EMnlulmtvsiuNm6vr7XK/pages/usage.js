(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{mrYn:function(n,e,o){"use strict";o.r(e);var t=o("q1tI"),i=o.n(t),s=o("/MKj"),a=o("SQ8s"),r=o("o2GN");e.default=Object(s.b)()(function(){return i.a.createElement(a.a,{path:"/usage",article:{en:Object(r.default)("---\ntitle: Usage\n---\n# Usage\n\nIn this page we'll explain the basic usage of VEDA.\n\n\n## Basic workflow\n\nThe workflow of livecoding with VEDA is like this:\n\n1. Launch VEDA with `Veda: Toggle`\n2. Run shaders with `Veda: Load Shader` (key: `ctrl-enter`)\n\nSo let's start coding!\n\nFirst\u3001 hit `ctrl-shift-p` (mac: `cmd-shift-p`) to open command palette.\nWhen you type `veda` Atom will suggest `Veda: Toggle`.\nHit `enter` then VEDA will show the result of default shader:\n\n![](/static/images/usage1.gif)\n\nNext, let's create a new GLSL file.\nCreate new file with `ctrl-n` (mac: `cmd-n`) and save as `myshader.frag`.\n\nPaste this code to the file:\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(As you may notice, this is the default code of [GLSL Sandbox](http://glslsandbox.com/)!)\n\n...then hit `ctrl-enter`.\nVEDA will evaluate `myshader.frag` and show the result:\n\n![](/static/images/usage2.gif)\n\nCongratulations!!\nNow you can edit the code and see the result with `ctrl-enter`.\n\n---\n\nYou've started the first step as a live coder!!\nSee Features for more advanced features.\n"),ja:Object(r.default)("---\ntitle: \u64cd\u4f5c\u65b9\u6cd5\n---\n# \u64cd\u4f5c\u65b9\u6cd5\n\n\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f\u3001VEDA\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\n\n\n## \u57fa\u672c\u7684\u306a\u6d41\u308c\n\nVEDA\u3092\u4f7f\u3063\u305f\u30e9\u30a4\u30d6\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u30d5\u30ed\u30fc\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\n1. `Veda: Toggle` \u3067VEDA\u3092\u8d77\u52d5\n2. `Veda: Load Shader` (\u30ad\u30fc: `ctrl-enter`) \u3067\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u5b9f\u884c\n\n\u305d\u308c\u3067\u306f\u3001\u9806\u3092\u8ffd\u3063\u3066\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\n\u307e\u305a\u3001 `ctrl-shift-p` (mac\u306e\u5834\u5408\u306f `cmd-shift-p`) \u3067\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8\u3092\u958b\u304d\u307e\u3059\u3002\n`veda` \u3068\u5165\u529b\u3059\u308b\u3068 `Veda: Toggle` \u304c\u30b5\u30b8\u30a7\u30b9\u30c8\u3055\u308c\u308b\u306e\u3067\u3001 `enter` \u3067\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3059\u308b\u3068\u3001VEDA\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u5b9f\u884c\u3057\u3001\u753b\u9762\u306b\u8868\u793a\u3057\u307e\u3059\u3002\n\n![](/static/images/usage1.gif)\n\n\u7d9a\u3044\u3066\u3001\u65b0\u3057\u3044\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u4f5c\u3063\u3066\u5b9f\u884c\u3057\u307e\u3057\u3087\u3046\u3002\n`ctrl-n` (mac\u306e\u5834\u5408\u306f `cmd-n`) \u3067\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3001 `myshader.frag` \u3068\u3044\u3046\u540d\u524d\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002\n\n\u4f5c\u6210\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u4ee5\u4e0b\u306eGLSL\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3066\u4e0b\u3055\u3044\u3002\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(\u304a\u6c17\u3065\u304d\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u3053\u308c\u306f[GLSL Sandbox](http://glslsandbox.com/)\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30b3\u30fc\u30c9\u3067\u3059\uff01)\n\n\u305d\u3057\u3066 `ctrl-enter` \u3092\u62bc\u3059\u3068\u3001VEDA\u306f `myshader.frag` \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\n![](/static/images/usage2.gif)\n\n\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\n\u3042\u3068\u306f\u3001\u30b3\u30fc\u30c9\u3092\u7de8\u96c6\u3057\u3066 `ctrl-enter` \u3067\u5b9f\u884c\u3001\u3092\u7e70\u308a\u8fd4\u3057\u3066\u3001\u6b21\u3005\u306bGLSL\u3092\u5b9f\u884c\u3057\u3066\u3044\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n\n---\n\n\u3053\u308c\u3067\u3042\u306a\u305f\u306fVEDA\u3067\u30e9\u30a4\u30d6\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01\n\u6a5f\u80fd\u4e00\u89a7\u3092\u898b\u3066\u3001VEDA\u306e\u3044\u308d\u3044\u308d\u306a\u6a5f\u80fd\u3092\u4f7f\u3044\u3053\u306a\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u3087\u3046\uff01\n")}})})},qtgg:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usage",function(){var n=o("mrYn");return{page:n.default||n}}])}},[["qtgg",1,0]]]);