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

VEDAは以下のソフトウェアに依存しています。
まずはこれらをインストールしましょう。

- Python 2.x
- glslangValidator


### Python 2.x

VEDAはNode.jsのネイティブアドオンを利用するため、Python 2系をインストールする必要があります。
`python -V` を実行して、Pythonのバージョンを確認してください。


### glslangValidator

`glslangValidator` はGLSLコードを検証するためのソフトウェアです。
以下のステップに従ってインストールしてください。


#### macOS

homebrewで簡単にインストールできます。

`brew install glslang`


#### Windows or Linux

WindowsとLinuxの場合、Vulkan SDKをインストールするとglslangValidatorもインストールされます。
以下のサイトからVulkan SDKを入手してください。

https://www.lunarg.com/vulkan-sdk/

続いて、glslangValidatorがインストールされた場所を環境変数 `PATH` に加える必要があります。
Windowsの場合、glslangValidatorは `C:\VulkanSDK\( version )\Bin` にインストールされているはずです。

glslangValidator の場所は、VEDAの設定で指定することもできます。  


## 2. VEDA本体のインストール

VEDAをAtomの `Settings` タブか、`apm` からインストールできます。

```bash
apm install vedajs
```

---

これでVEDAの準備ができました！
次は [操作方法](/usage?lang=ja) のページでVEDAの基本的な使い方を覚えましょう。
