# 操作方法

このページでは、VEDAの基本的な使い方を紹介します。


## 基本的な流れ

VEDAを使ったライブコーディングのフローは次のようになります。

1. `Veda: Toggle` でVEDAを起動
2. `Veda: Load Shader` (キー: `ctrl-enter`) でシェーダーを実行

それでは、順を追って解説していきます。

まず、 `ctrl-shift-p` (macの場合は `cmd-shift-p`) でコマンドパレットを開きます。
`veda` と入力すると `Veda: Toggle` がサジェストされるので、 `enter` で実行してください。
すると、VEDAはデフォルトのシェーダーを実行し、画面に表示します。

![](/static/images/usage1.gif)

続いて、新しいシェーダーを作って実行しましょう。
`ctrl-n` (macの場合は `cmd-n`) で新規ファイルを作成し、 `myshader.frag` という名前で保存します。

作成したファイルに以下のGLSLコードをコピーして下さい。

```glsl
precision mediump float;
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void) {
  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;

  float color = 0.0;
  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);
  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);
  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);
  color *= sin(time / 10.0) * 0.5;

  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);
}
```

(お気づきかもしれませんが、これは[GLSL Sandbox](http://glslsandbox.com/)のデフォルトのコードです！)

そして `ctrl-enter` を押すと、VEDAは `myshader.frag` を実行します。

![](/static/images/usage2.gif)

おめでとうございます！
あとは、コードを編集して `ctrl-enter` で実行、を繰り返して、次々にGLSLを実行していってください。


## その他コマンド一覧

VEDAがAtomにインストールするコマンドは以下の通りです。

- `Veda: Toggle`
  - VEDAを起動/停止する
- `Veda: Load Shader` (key: `ctrl-enter`)
  - 現在開いているGLSLファイルを実行する
- `Veda: Watch Shader` (key: `ctrl-shift-enter`)
  - 現在開いているファイルの変更を監視し、自動的に実行する
- `Veda: Watch Active Editor` (key: `ctrl-alt-enter`)
  - アクティブなタブの変更を監視し、自動的に実行する
- `Veda: Stop Watching` (key: `ctrl-.`)
  - `watch-shader` と `watch-active-editor` を停止する

基本的には、最初の2つのコマンドで事足りるでしょう。


---

これであなたはVEDAでライブコーディングできるようになりました！
機能一覧を見て、VEDAのいろいろな機能を使いこなせるようになりましょう！
