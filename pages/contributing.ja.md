---
title: CONTRIBUTING
---
# CONTRIBUTING

## 新機能のリクエスト・バグレポート

バグを見つけたり、欲しい機能をリクエストしたい場合は、GitHubでissueを立ててください👇

https://github.com/fand/veda/issues

あるいは、[Twitterのハッシュタグ \#VEDAJS](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd)や、[TOPLAP Slack](https://toplap.org/toplap-on-slack/)でもOKです。
いつでも気軽にコメントしてください！😸


## 開発方法

私達は、いつでもあなたのPull Requestを待っています！

VEDAの開発には、[fand/veda](https://github.com/fand/veda)および[fand/vedajs](https://github.com/fand/vedajs)のレポジトリが必要です。
下記の手順で、手元のPCに開発環境を用意してください。


### 1. [fand/vedajs](https://github.com/fand/vedajs) をforkしてクローン

VEDA.jsはVEDAのGLSLエンジンです。
AtomパッケージからVEDA.jsを参照するため、先に用意しておきます。

まずは、GitHub上でfand/vedajsをforkします。

https://github.com/fand/vedajs

次に、以下のコマンドを順番に実行してください。

```bash
git clone https://github.com/(あなたのGitHubユーザー名)/vedajs
cd vedajs
yarn
yarn link
```

### 2. [fand/veda](https://github.com/fand/veda)をforkしてクローン

fand/veda はVEDAのAtomパッケージ本体です。
Atomから手元の fand/veda が参照されるようにします。

先ほどと同じく、GitHub上でfand/vedaをforkします。

https://github.com/fand/veda

続いて、以下のコマンドを順番に実行してください。

```bash
git clone https://github.com/(あなたのGitHubユーザー名)/veda
cd veda
yarn
yarn link vedajs  # 手元のvedajsを参照するようになる
apm link  # Atomが手元のfand/vedaを参照するようになる
```


### 3. コードを編集する

これまでの手順で、Atomは手元のコードを実行するようになりました。
新しいbranchを作り、必要な箇所を修正して、 `git commit` してください。


### 4. テスト

テストを実行して、コードが壊れていないことを確認します。
変更箇所がテスト可能な場所であれば、テストを追加してください。

```bash
npm run test
```


### 5. Pull Requestの作成

GitHubにpushして、Pull Requestを作成します。

https://github.com/fand/veda/pulls

以上でPull Requestの作成が完了しました。
お疲れ様でした！！！🙌


## ドキュメントの改善

このWebサイトは、GitHub Pagesでホストされています。
何か間違いを見つけたら、 fand/veda.gl にissueを立ててください。

https://github.com/fand/veda.gl
