module.exports=__NEXT_REGISTER_PAGE("/features/midi",function(){var a=webpackJsonp([11],{328:function(a,b,c){a.exports=c(329)},329:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(3),g=c(2),h=c(4);b["default"]=Object(h.a)(function(){return e.a.createElement(f.a,{path:"/features/midi",article:{en:Object(g["default"])("---\ntitle: MIDI Input\n---\n# MIDI input\n\nVEDA supports MIDI input.\nWhen you set `\"midi\": true` in [Settings](/settings), VEDA enables following uniform variables:\n\n- `sampler2D midi`\n- `sampler2D note`\n\n## `sampler2D midi`\n\n`sampler2D midi` stores MIDI events obtained by Web MIDI API. The size of `midi` is `256x128`. Each pixel stores the last event of the corresponding MIDI Events.\n\nFor example, `texture2D(midi, vec2(176. / 256., 8. / 128.)).x` yields the value of CC message of CC#8 sent to Channel 1.\n\n- `176.` (0xB0): Control Change of Channel \\#1\n- `8.` (0x08): Control Number\n- `.x` (3nd byte): Value\n\nSee [MIDI Event Table](http://www.onicos.com/staff/iz/formats/midi-event.html) to lookup the coordinate.\n\n## `sampler2D note`\n\n`sampler2D note` stores the volumes for each note number. The size of `note` is `128x1`. Each pixel stores the volume of the last event for corresponding MIDI note.\n\nFor example, `texture2D(note, vec2(60. / 128., 0)).x` yields the velocity of note `C4` (Middle C).\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) for actual usage.\n"),ja:Object(g["default"])("---\ntitle: MIDI\u5165\u529B\n---\n# MIDI\u5165\u529B\n\nVEDA\u3067\u306F\u3001MIDI\u5165\u529B\u304B\u3089\u306E\u30A4\u30D9\u30F3\u30C8\u3092GLSL\u4E0A\u3067\u5229\u7528\u3067\u304D\u307E\u3059\u3002\n[Settings](/settings?lang=ja)\u3067 `\"midi\": true` \u3059\u308B\u3068\u3001\u4EE5\u4E0B\u306Euniform\u5909\u6570\u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\n\n- `sampler2D midi`\n- `sampler2D note`\n\n## `sampler2D midi`\n\n`sampler2D midi` \u306B\u306F\u3001Web MIDI API\u306B\u3088\u3063\u3066\u53D6\u5F97\u3057\u305FMIDI\u30A4\u30D9\u30F3\u30C8\u306E\u5024\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n`midi` \u306E\u30B5\u30A4\u30BA\u306F `256x128` \u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\n\u5404\u30D4\u30AF\u30BB\u30EB\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30C1\u30E3\u30F3\u30CD\u30EB\u306E\u76F4\u8FD1\u306EMIDI\u30A4\u30D9\u30F3\u30C8\u306E\u5024\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002\n\n\u4F8B\u3048\u3070\u3001 `texture2D(midi, vec2(176. / 256., 8. / 128)).x` \u306F\u3001\u30C1\u30E3\u30F3\u30CD\u30EB \\#1\u306ECC\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5024\u306B\u306A\u308A\u307E\u3059\u3002\n\n- `176.` (0xB0): \u30C1\u30E3\u30F3\u30CD\u30EB \\#1 \u306EMIDI CC\u30A4\u30D9\u30F3\u30C8\n- `8.` (0x08): \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30CA\u30F3\u30D0\u30FC\n- `.x` (3nd byte): \u5024\n\n\u5404\u7A2EMIDI\u30A4\u30D9\u30F3\u30C8\u306E\u756A\u53F7\u306F\u3001 [MIDI Event Table](http://www.onicos.com/staff/iz/formats/midi-event.html) \u3092\u53C2\u8003\u306B\u3057\u3066\u4E0B\u3055\u3044\u3002\n\n## `sampler2D note`\n\n`sampler2D note` \u306B\u306F\u3001\u5404MIDI\u30CE\u30FC\u30C8\u306E\u5024\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002.\n`note` \u306E\u30B5\u30A4\u30BA\u306F `128x1` \u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002\n\u5404\u30D4\u30AF\u30BB\u30EB\u306E\u5024\u306F\u3001\u5BFE\u5FDC\u3059\u308B\u30CE\u30FC\u30C8\u30CA\u30F3\u30D0\u30FC\u306E\u73FE\u5728\u306E\u30D9\u30ED\u30B7\u30C6\u30A3\u3092\u8868\u3057\u3066\u3044\u307E\u3059\u3002\n\n\u4F8B\u3048\u3070\u3001 `texture2D(note, vec2(60. / 128., 0)).x` \u306B\u306F `C4` (\u4E2D\u592E\u306E\u30C9) \u306E\u30D9\u30ED\u30B7\u30C6\u30A3\u304C\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n\n\u8A73\u3057\u304F\u306F [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002\n")}})})}},[328]);return{page:a.default}});