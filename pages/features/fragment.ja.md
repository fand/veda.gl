---
title: フラグメントシェーダー
description: VEDAで基本的なフラグメントシェーダーを実行する方法
---

# フラグメントシェーダー

VEDA では、[GLSL Sandbox](http://glslsandbox.com) のような形式のフラグメントシェーダーを実行できます。

フラグメントシェーダーのファイル名は `*.frag` という形式にしてください。
例えば、 `foo.frag` というファイルを作成し、以下の内容をコピペしてください。

```glsl
precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);
}
```

ファイルを保存して `ctrl-enter` を押すと、VEDA はシェーダーを実行し、Atom の背景に表示します。
