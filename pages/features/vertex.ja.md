---
title: 頂点シェーダー
description: VEDAで基本的な頂点シェーダーを実行する方法
---
# 頂点シェーダー

VEDAでは、[vertexshaderart.com](https://vertexshaderart.com/) のような形式の頂点シェーダーを実行できます。

頂点シェーダーのファイル名は `*.vert` という形式にしてください。
例えば、 `foo.vert` というファイルを作成し、以下の内容をコピペしてください

```glsl
/*{ "vertexCount": 300 }*/
precision mediump float;
attribute float vertexId;
uniform float vertexCount;
uniform float time;
uniform vec2 resolution;
varying vec4 v_color;

void main() {
  float i = vertexId + time *2.;

  vec3 pos = vec3(
    cos(i * 1.0),
    sin(i * 1.1),
    cos(i * 1.2)
  );

  gl_Position = vec4(pos.x, pos.y, pos.z, 1);

  v_color = vec4(fract(vertexId / 3.), 1, 1, 1);
}
```

ファイルを保存して `ctrl-enter` を押すと、VEDAはシェーダーを実行し、Atomの背景に表示します。

詳しい書き方については [examples](https://github.com/fand/veda/blob/master/examples/vertex.vert) をご覧ください。
