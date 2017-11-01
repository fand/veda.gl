# ゲームパッド入力

VEDAはゲームパッド入力に対応しています。
PCに接続されたゲームパッドの入力を、GLSL上で利用できます。

[Settings](/settings)に `"gamepad": true` を追加すると、以下のuniform変数が利用できるようになります。

- `sampler2D gamepad`

`sampler2D gamepad` はPCに接続されたゲームパッドの状態を保存します。
`gamepad` のサイズは `128x2` です。
ボタン及びスティックの状態は、それぞれ `y = 0.0` と `y = 1.0` に保存されています。

例えば、ゲームパッドの3番目のボタンが押されている間、 `texture2D(gamepad, vec2(3. / 128., 0.)).r` は `1.0` となります。

詳しくは[examples](https://github.com/fand/veda/blob/master/examples/gamepad.frag)をご覧ください。
