module.exports=__NEXT_REGISTER_PAGE("/features/vertex",function(){var a=webpackJsonp([8],{332:function(a,b,c){a.exports=c(333)},333:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(3),g=c(2),h=c(4);b["default"]=Object(h.a)(function(){return e.a.createElement(f.a,{path:"/features/vertex",article:{en:Object(g["default"])("---\ntitle: Vertex Shaders\ndescription: How to run vertex shaders on VEDA\n---\n### Vertex Shaders\n\nVEDA also supports vertex shaders like [vertexshaderart.com](https://vertexshaderart.com/).\n\nVertex shaders must be named like `*.vert`.\nCreate a file `foo.vert` like this:\n\n```glsl\n/*{ \"vertexCount\": 300 }*/\nprecision mediump float;\nattribute float vertexId;\nuniform float vertexCount;\nuniform float time;\nuniform vec2 resolution;\nvarying vec4 v_color;\n\nvoid main() {\n  float i = vertexId + time *2.;\n\n  vec3 pos = vec3(\n    cos(i * 1.0),\n    sin(i * 1.1),\n    cos(i * 1.2)\n  );\n\n  gl_Position = vec4(pos.x, pos.y, pos.z, 1);\n\n  v_color = vec4(fract(vertexId / 3.), 1, 1, 1);\n}\n```\n\nThen save it and hit `ctrl-enter` to run it.\nVEDA will show the result on the background.\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/vertex.vert) for more details.\n"),ja:Object(g["default"])("---\ntitle: \u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\ndescription: VEDA\u3067\u57FA\u672C\u7684\u306A\u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\n---\n# \u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\n\nVEDA\u3067\u306F\u3001[vertexshaderart.com](https://vertexshaderart.com/) \u306E\u3088\u3046\u306A\u5F62\u5F0F\u306E\u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\n\n\u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u30D5\u30A1\u30A4\u30EB\u540D\u306F `*.vert` \u3068\u3044\u3046\u5F62\u5F0F\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u4F8B\u3048\u3070\u3001 `foo.vert` \u3068\u3044\u3046\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u3001\u4EE5\u4E0B\u306E\u5185\u5BB9\u3092\u30B3\u30D4\u30DA\u3057\u3066\u304F\u3060\u3055\u3044\n\n```glsl\n/*{ \"vertexCount\": 300 }*/\nprecision mediump float;\nattribute float vertexId;\nuniform float vertexCount;\nuniform float time;\nuniform vec2 resolution;\nvarying vec4 v_color;\n\nvoid main() {\n  float i = vertexId + time *2.;\n\n  vec3 pos = vec3(\n    cos(i * 1.0),\n    sin(i * 1.1),\n    cos(i * 1.2)\n  );\n\n  gl_Position = vec4(pos.x, pos.y, pos.z, 1);\n\n  v_color = vec4(fract(vertexId / 3.), 1, 1, 1);\n}\n```\n\n\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3057\u3066 `ctrl-enter` \u3092\u62BC\u3059\u3068\u3001VEDA\u306F\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3057\u3001Atom\u306E\u80CC\u666F\u306B\u8868\u793A\u3057\u307E\u3059\u3002\n\n\u8A73\u3057\u3044\u66F8\u304D\u65B9\u306B\u3064\u3044\u3066\u306F [examples](https://github.com/fand/veda/blob/master/examples/vertex.vert) \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002\n")}})})}},[332]);return{page:a.default}});