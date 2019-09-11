---
title: VEDAのインストール
---
# VEDAのインストール

Atomを光らせよう。

![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)

<div align="center" style="line-height: 40px;">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)
![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)
</div>


## 1. 事前準備

VEDAはNode.jsのネイティブアドオンを利用するため、Python 2系をインストールする必要があります。
ターミナルで `python -V` を実行して、Pythonのバージョンを確認してください。

既にPython2と3をインストール済みの場合、npmがPython2を参照するように設定します。
ターミナルから `npm config set python python2` を実行して下さい。


## 2. VEDA本体のインストール

VEDAをAtomの `Settings` タブか、`apm` からインストールできます。

```bash
apm install veda
```

---

これでVEDAの準備ができました！
次は [操作方法](/usage?lang=ja) のページでVEDAの基本的な使い方を覚えましょう。
