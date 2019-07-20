---
title: FAQ
---
# FAQ

何か質問があれば、以下で気軽に聞いてみてください！

- <a href="https://twitter.com/search?f=tweets&q=%23vedajs&src=typd" target="\_blank">Twitterのハッシュタグ `#VEDAJS`</a>
- <a href="https://toplap.org/toplap-on-slack/" target="\_blank">TOPLAP Slackの \#VEDA</a>


## 動かないんだけど？

ほとんどの場合は以下のどれかが原因です。


#### Python2.xがインストールされていない

VEDAはNode.jsのネイティブアドオンに依存しているため、Python2系が必要です。
Python3系がインストールされている場合は、 `python` がPython2系を指すようにして下さい。


#### パッケージのRebuildが必要

Atomの右下に🐞マークが表示されていませんか？
あればクリックして、パッケージをRebuildしてください。


## PCが古すぎる

古いPCではWebGLが動作しない事があります。
一応対処法があるにはありますが、根本的な解決はできません🙇

https://github.com/fand/veda/issues/27#issuecomment-332019692


#### 上記以外の場合

お手数ですが<a target="\_blank" href="https://github.com/fand/veda/issues">GitHubのissue</a>やTwitterの<a target="\_blank" href="https://twitter.com/search?f=tweets&q=%23vedajs&src=typd">ハッシュタグ \#VEDAJS"</a>で質問してください。


## 他のライブコーディング環境との違いは？

我々がVEDAの開発を始めたとき、既に [Kodelife](https://hexler.net/software/kodelife) や [The Force](http://shawnlawson.github.io/The_Force/) といった、数多くのGLSLライブコーディング環境が存在していました。
このような環境とVEDAとは、さまざまな機能の違いがありますが、開発方針が大きく異なると考えています。

VEDAは、WebGLをフル活用したGLSL環境を目指しています。
Web AudioやWeb MIDIといったWeb技術を利用することで、Web技術の最先端を利用したパワフルな環境を提供します。
また、JavaScript/WebGLにおける [glslify](https://github.com/stackgl/glslify)、Atomの [autocomplete-glsl](https://atom.io/packages/autocomplete-glsl) など、それぞれのコミュニティによる既存の資産を活用し、快適で高速なコーディング環境を実現することを目指しています。


## GLSLを学びたい！

日本語の場合、 wgld.org が最も充実した教材です。
イチから学びたいという人にはこちらをおすすめします。

https://wgld.org/d/glsl/

また、The Book of Shadersには乱数やノイズについて丁寧な解説があります。
練習問題を解いていくと、確実にレベルアップできるでしょう。

https://thebookofshaders.com/?lan=jp
