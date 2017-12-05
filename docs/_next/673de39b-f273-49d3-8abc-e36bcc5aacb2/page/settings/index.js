
          window.__NEXT_REGISTER_PAGE('/settings', function() {
            var comp = module.exports=webpackJsonp([6],{360:function(a,b,c){a.exports=c(361)},361:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(8),j=d(i),k=c(7);b.default=(0,k.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/settings",article:{en:(0,j.default)("---\ntitle: Settings\n---\n# Settings\n\nVEDA has 3 ways to change settings: `Global Settings`, `Project Settings` and `File Settings`.\n\nThe order of priority is `File Settings > Project Settings > Global Settings`.\nFor example, when you set `\"audio\": false` in Project Settings and `\"audio\": true` in File Settings, VEDA enables audio inputs.\n\n\n## Global Settings\n\nYou can set Global Settings from Atom's `Settings` > `Packages` menu.\nYou can set these properties in the Settings pane.\n\n- `glslangValidator path`\n  - ref. [Install `glslslangValidator`](/atom#glslslangvalidator)\n- `Pixel Ratio`:\n  - Ratio of pixel-per-rendering call\n  - Increasing this will reduce CPU/GPU load\n- `Frameskip`\n  - Number of frames to skip rendering\n  - e.g. If Frameskip is `2` FPS is `30` (= 60 / 2)\n- `Vertex Count`\n  - Number of vertices in vertex shader\n- `Vertex Mode`\n  - How to draw vertices\n\n\n## Project Settings\n\nProject settings is loaded from `.vedarc` on your project root.\n\n`.vedarc` is parsed as [JSON5](https://github.com/json5/json5) format.\nIt's almost the same as JSON, but it's more easy to write:\n\n```js\n{\n  \"audio\": true, // Enable audio input\n  \"camera\": true, // Enable WebCam input\n\n  IMPORTED: { // \"\" is not necessary\n    image: {\n      \"PATH\": \"./images/1.jpg\",\n    },\n  },  // trailing-comma is OK\n}\n```\n\n`.vedarc` is loaded on startup and reloaded automatically when you edit it.\n\n\n## File Settings\n\nYou can also write settings specific for the file.\nWrite comments on the head of the file like this:\n\n```glsl\n/*{\n  \"audio\": true,  // Audio input is enabled only in this file\n}*/\nvoid main() {\n  ...\n}\n```\n\n\n## Which one should I use?\n\nUse `.vedarc` for settings such as loading images / videos you use in the project.\nOtherwise, write settings to file comment as File Settings.\n"),ja:(0,j.default)("---\ntitle: \u8A2D\u5B9A\u65B9\u6CD5\n---\n# \u8A2D\u5B9A\u65B9\u6CD5\n\nVEDA\u306E\u8A2D\u5B9A\u306F\u3001 `Global Settings`, `Project Settings`, `File Settings` \u306E3\u901A\u308A\u306E\u65B9\u6CD5\u3067\u884C\u3044\u307E\u3059\u3002\n\n\u512A\u5148\u9806\u4F4D\u306F `File Settings > Project Settings > Global Settings` \u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\n\u4F8B\u3048\u3070\u3001Project Settings\u3067 `\"audio\": false` \u3068\u306A\u3063\u3066\u3044\u3066\u3082\u3001 File Settings\u3067 `\"audio\": true` \u3068\u3057\u305F\u5834\u5408\u3001\u97F3\u58F0\u5165\u529B\u306F\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002\n\n\n## Global Settings\n\nAtom\u306E\u8A2D\u5B9A\u306E `Packages` \u30BF\u30D6\u3067 `veda` \u3068\u5165\u529B\u3059\u308B\u3068\u3001VEDA\u306E\u8A2D\u5B9A\u753B\u9762\u3092\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u8A2D\u5B9A\u753B\u9762\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u9805\u76EE\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\n\n- `glslangValidator path`\n  - [`glslslangValidator` \u306E\u30D1\u30B9](/atom#glslslangvalidator)\n- `Pixel Ratio`:\n  - \u63CF\u753B\u3092\u884C\u306A\u3046\u30D4\u30AF\u30BB\u30EB\u306E\u5272\u5408\n  - \u5927\u304D\u3044\u6570\u5B57\u306B\u3059\u308B\u3068CPU/GPU\u8CA0\u8377\u3092\u8EFD\u6E1B\u3067\u304D\u308B\n- `Frameskip`\n  - \u63CF\u753B\u3092\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u30D5\u30EC\u30FC\u30E0\u306E\u6570\n  - \u4F8B: `2` \u306E\u5834\u5408\u3001FPS\u306F `30` (= 60 / 2) \u3068\u306A\u308B\n- `Vertex Count`\n  - \u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u9802\u70B9\u306E\u6570\n- `Vertex Mode`\n  - \u9802\u70B9\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u63CF\u753B\u30E2\u30FC\u30C9\n\n\n## Project Settings\n\nAtom\u3067\u958B\u3044\u3066\u3044\u308B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u76F4\u4E0B\u306B `.vedarc` \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3059\u308B\u3068\u3001\u305D\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u306E\u307F\u6709\u52B9\u306A\u8A2D\u5B9A\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\n\u8A2D\u5B9A\u306F[JSON5](https://github.com/json5/json5)\u5F62\u5F0F\u3067\u66F8\u304D\u307E\u3059\u3002\n\u57FA\u672C\u7684\u306B\u306FJSON\u3068\u540C\u3058\u3067\u3059\u304C\u3001\u30B3\u30E1\u30F3\u30C8\u3092\u66F8\u3051\u305F\u308A\u3001\u5C11\u3057\u3060\u3051\u66F8\u304D\u3084\u3059\u304F\u3084\u3063\u3066\u3044\u307E\u3059\u3002\n\n```js\n{\n  \"audio\": true, // \u97F3\u58F0\u5165\u529B\u3092\u6709\u52B9\u306B\u3059\u308B\n  \"camera\": true, // Web\u30AB\u30E1\u30E9\u5165\u529B\u3092\u6709\u52B9\u306B\u3059\u308B\n\n  IMPORTED: { // \"\" \u3067\u56F2\u307E\u306A\u304F\u3066\u3082OK\n    image: {\n      \"PATH\": \"./images/1.jpg\",\n    },\n  },  // \u672B\u5C3E\u306B , \u3082\u66F8\u3051\u308B\n}\n```\n\n`.vedarc` \u306FVEDA\u8D77\u52D5\u6642\u306B\u81EA\u52D5\u7684\u306B\u30ED\u30FC\u30C9\u3055\u308C\u307E\u3059\u3002\n`.vedarc` \u3092\u7DE8\u96C6\u3057\u3066\u4FDD\u5B58\u3059\u308B\u3068\u3001\u5909\u66F4\u306F\u81EA\u52D5\u7684\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002\n\n\n## File Settings\n\n\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306BJSON5\u5F62\u5F0F\u306E\u30B3\u30E1\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u306E\u307F\u6709\u52B9\u306A\u8A2D\u5B9A\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\n```glsl\n/*{\n  \"audio\": true,  // \u3053\u306E\u30D5\u30A1\u30A4\u30EB\u3067\u306E\u307F\u97F3\u58F0\u5165\u529B\u304C\u6709\u52B9\n}*/\nvoid main() {\n  /* \u7701\u7565 */\n}\n```\n\n\n## \u5B9F\u969B\u306E\u4F7F\u3044\u5206\u3051\n\n\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u3044\u307E\u308F\u3059\u753B\u50CF/\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u306E\u8A2D\u5B9A\u306F `.vedarc` \u66F8\u3044\u3066\u304A\u304F\u3068\u4FBF\u5229\u3067\u3059\u3002\n\u305D\u306E\u4ED6\u306E\u8A2D\u5B9A\u306F\u3001\u306A\u308B\u3079\u304F File Settings \u3068\u3057\u3066\u3001\u30D5\u30A1\u30A4\u30EB\u5148\u982D\u306E\u30B3\u30E1\u30F3\u30C8\u306B\u66F8\u304F\u3068\u826F\u3044\u3067\u3057\u3087\u3046\u3002\n")}})})}},[360]);
            return { page: comp.default }
          })
        