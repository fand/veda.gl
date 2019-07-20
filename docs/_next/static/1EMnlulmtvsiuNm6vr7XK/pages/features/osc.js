(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"9SPc":function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),a=o.n(t),s=o("/MKj"),r=o("SQ8s"),c=o("o2GN");n.default=Object(s.b)()(function(){return a.a.createElement(r.a,{path:"/features/osc",article:{en:Object(c.default)('---\ntitle: OSC Input\n---\n# OSC Input\n\nVEDA supports OSC inputs.\nYou can use VEDA in sync with SuperCollider, TouchDesigner, openFrameworks, etc!\n\n![OSC example](/static/images/osc.gif)\n\nTo enable OSC, specify the port number in the settings.\nWhen you add `"osc": 4000` to the settings, messages will be stored and passed as textures:\n\n- Texture name will be automatically generated from addresses.\n  - `/foo`: `sampler2D osc_foo`\n  - `/foo/bar`: `sampler2D osc_foo_bar`\n- Arguments are translated to float. Strings are ignored.\n  - `/foo 0.1 hello 100` yields a texture that contains `[0.1 0 100]`\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.\n'),ja:Object(c.default)('---\ntitle: OSC Input\n---\n# OSC Input\n\nVEDA\u306fOSC\u5f62\u5f0f\u306e\u5165\u529b\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001SuperCollider\u3084TouchDesigner\u3001openFrameworks\u3068\u3044\u3063\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3068\u540c\u671f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01\n\n![OSC example](/static/images/osc.gif)\n\nVEDA\u3067OSC\u5165\u529b\u3092\u5229\u7528\u3059\u308b\u306b\u306f\u3001Settings\u3067\u30dd\u30fc\u30c8\u756a\u53f7\u3092\u6307\u5b9a\u3057\u3066\u4e0b\u3055\u3044\u3002\n`"osc": 4000` \u3068\u6307\u5b9a\u3057\u305f\u5834\u5408\u30014000\u756a\u306e\u30dd\u30fc\u30c8\u306b\u9001\u3089\u308c\u305fOSC\u30e1\u30c3\u30bb\u30fc\u30b8\u304cGLSL\u4e0a\u3067\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\n\n- \u30c6\u30af\u30b9\u30c1\u30e3\u306e\u540d\u524d\u306f\u3001OSC\u30a2\u30c9\u30ec\u30b9\u304b\u3089\u81ea\u52d5\u7684\u306b\u6c7a\u5b9a\u3057\u307e\u3059\n  - `/foo` \u3078\u306eOSC\u30e1\u30c3\u30bb\u30fc\u30b8\u306f `sampler2D osc_foo` \u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\n  - `/foo/bar` \u3078\u306eOSC\u30e1\u30c3\u30bb\u30fc\u30b8\u306f `sampler2D osc_foo_bar` \u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\n- OSC\u5f15\u6570\u306f\u5168\u3066float\u306b\u5909\u63db\u3055\u308c\u307e\u3059\n  - \u6587\u5b57\u5217\u306f\u7121\u8996\u3055\u308c\u307e\u3059\n\n\u4f8b\u3048\u3070\u3001 `/foo 0.1 hello 100` \u3068\u3044\u3046OSC\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u3089\u308c\u305f\u5834\u5408\u3001VEDA\u306f `3x1` \u306e\u30c6\u30af\u30b9\u30c1\u30e3 `sampler2D osc_foo` \u3092\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\n`osc_foo` \u306e\u5404\u30d4\u30af\u30bb\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u3001 `0.1` `0` `100` \u3068\u306a\u308a\u307e\u3059\u3002\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.\n')}})})},xibK:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/osc",function(){var e=o("9SPc");return{page:e.default||e}}])}},[["xibK",1,0]]]);