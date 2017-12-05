---
title: 設定方法
---
# 設定方法

VEDAの設定は、 `Global Settings`, `Project Settings`, `File Settings` の3通りの方法で行います。

優先順位は `File Settings > Project Settings > Global Settings` となっています。
例えば、Project Settingsで `"audio": false` となっていても、 File Settingsで `"audio": true` とした場合、音声入力は有効になります。


## Global Settings

Atomの設定の `Packages` タブで `veda` と入力すると、VEDAの設定画面を開くことができます。
設定画面では、以下の項目のデフォルト値を設定できます。

- `glslangValidator path`
  - [`glslslangValidator` のパス](/atom#glslslangvalidator)
- `Pixel Ratio`:
  - 描画を行なうピクセルの割合
  - 大きい数字にするとCPU/GPU負荷を軽減できる
- `Frameskip`
  - 描画をスキップするフレームの数
  - 例: `2` の場合、FPSは `30` (= 60 / 2) となる
- `Vertex Count`
  - 頂点シェーダーの頂点の数
- `Vertex Mode`
  - 頂点シェーダーの描画モード


## Project Settings

Atomで開いているディレクトリ直下に `.vedarc` ファイルを作成すると、そのディレクトリでのみ有効な設定を書くことができます。

設定は[JSON5](https://github.com/json5/json5)形式で書きます。
基本的にはJSONと同じですが、コメントを書けたり、少しだけ書きやすくやっています。

```js
{
  "audio": true, // 音声入力を有効にする
  "camera": true, // Webカメラ入力を有効にする

  IMPORTED: { // "" で囲まなくてもOK
    image: {
      "PATH": "./images/1.jpg",
    },
  },  // 末尾に , も書ける
}
```

`.vedarc` はVEDA起動時に自動的にロードされます。
`.vedarc` を編集して保存すると、変更は自動的に反映されます。


## File Settings

ファイルの先頭にJSON5形式のコメントを追加することで、そのファイルでのみ有効な設定を書くことができます。

```glsl
/*{
  "audio": true,  // このファイルでのみ音声入力が有効
}*/
void main() {
  /* 省略 */
}
```


## 実際の使い分け

プロジェクトで使いまわす画像/動画ファイルの設定は `.vedarc` 書いておくと便利です。
その他の設定は、なるべく File Settings として、ファイル先頭のコメントに書くと良いでしょう。
