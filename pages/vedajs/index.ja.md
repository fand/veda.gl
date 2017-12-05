---
title: VEDA.js
---
<div align="center">
  <img alt="logo" src="https://user-images.githubusercontent.com/1403842/28923702-d8155d46-7899-11e7-817b-1193d138e5b8.png" width="192"/>

  <h1>VEDA.js</h1>
  <i>Shader Art Framework for Web</i>

  ![npm version](https://img.shields.io/npm/v/vedajs.svg) ![license MIT](https://img.shields.io/npm/l/vedajs.svg) [![hashtag #vedajs](https://img.shields.io/badge/hashtag-vedajs-blue.svg)](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd)
</div>


## What is VEDA.js?

VEDA.jsは、Web上でシェーダーアートを実現するためのフレームワークです。
元々はVEDAのGLSLエンジンとして開発されましたが、Web上でのシェーダー表現にも役に立つことがわかり、単独のnpmパッケージとして公開しました。


## インストール

`npm` または `yarn` でインストールできます。

```bash
npm install vedajs
```


## 使い方

```js
import Veda from 'vedajs';

const veda = new Veda();

veda.setCanvas(canvas);
veda.loadFragmentShader(code);

veda.play();
```


## 詳しい使い方

### フラグメントシェーダー

```js
veda.loadFragmentShader(code);
```

loadFragmentShaderは以下のコードと等価です:

```js
veda.loadShader({ fs: code });
```


### 頂点シェーダー

```js
veda.loadVertexShader(code);
```

loadVertexShaderは以下のコードと等価です:

```js
veda.loadShader({ vs: code });
```


### 頂点シェーダーとフラグメントシェーダーを組み合わせる

`loadShader` にシェーダーオブジェクトを渡してください。

```js
veda.loadShader({
  vs: vertexShaderCode,
  fs: fragmentShaderCode,
});
```


### マルチパスレンダリング

VEDA.jsはマルチパスレンダリングをサポートしています。
`loadShader` に、各パスに対応するシェーダーオブジェクトの配列を渡してください。

```js
veda.loadShader([{
  vs: vertexShaderFor1stPass,
  fs: fragmentShaderFor1stPass
}, {
  fs: fragmentShaderFor2ndPass
}]);
```


### 音声入力

```js
veda.toggleAudio(true);
veda.loadShader(shader);
```


### MIDI入力

```js
veda.toggleMidi(true);
veda.loadShader(shader);
```


### Webカメラ

```js
veda.toggleCamera(true);
veda.loadShader(shader);
```


## キーボード入力

```js
veda.toggleKeyboard(true);
veda.loadShader(shader);
```


## ゲームパッド入力

```js
veda.toggleGamepad(true);
veda.loadShader(shader);
```


## 作者について

Takayosi Amagiが開発しています。

- Website: [gmork.in](https://gmork.in)
- Twitter: [@amagitakayosi](https://twitter.com/amagitakayosi)
- GitHub: [fand](https://github.com/fand)


## ライセンス

MIT
