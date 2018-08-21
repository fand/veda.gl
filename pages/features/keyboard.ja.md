---
title: キーボード入力
---
# キーボード入力

<p class="pc-only">このページでは、キーボード入力を用いたGLSLコードが実行されています。
  キーボードを押してみてください！  
</p>

VEDAでは、キーボード入力の状態を利用できます。
[Settings](/settings?lang=ja)で `"keyboard": true` すると、以下のuniform変数が利用できるようになります。

- `sampler2D key`

`sampler2D key` のサイズは `256x1` です。
キーコードに対応するx座標に、そのキーが押されているかどうかの値が入っています。

例えば、キー `a` (キーコード: 65)が押されている間、 `texture2D(key, vec2(65. / 256.)).r` は `1.0` となります。

詳しくは [examples](https://github.com/fand/veda/blob/master/examples/key.frag) をご覧ください。

## フルスクリーンモード

キー入力を利用したシェーダーでは、VEDAのフルスクリーン機能が便利です。
`Veda:Toggle Fullscreen` (`ctrl + escape`) を実行すると、VEDAはシェーダー以外の要素を非表示にします。
（もう一度押すと非表示が解除されます）
これにより、編集中のファイルを気にすることなくキー入力できるようになります。
