# OSC input

VEDAはOSC形式の入力に対応しています。
これにより、SuperColliderやTouchDesigner、openFrameworksといったソフトウェアと同期することができます！

![OSC example](/static/images/osc.gif)

VEDAでOSC入力を利用するには、Settingsでポート番号を指定して下さい。
`"osc": 4000` と指定した場合、4000番のポートに送られたOSCメッセージがGLSL上で利用できるようになります。

- テクスチャの名前は、OSCアドレスから自動的に決定します
  - `/foo` へのOSCメッセージは `sampler2D osc_foo` に保存されます
  - `/foo/bar` へのOSCメッセージは `sampler2D osc_foo_bar` に保存されます
- OSC引数は全てfloatに変換されます
  - 文字列は無視されます

例えば、 `/foo 0.1 hello 100` というOSCメッセージが送られた場合、VEDAは `3x1` のテクスチャ `sampler2D osc_foo` を自動的に作成します。
`osc_foo` の各ピクセルに保存されるデータは、 `0.1` `0` `100` となります。

See [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.
