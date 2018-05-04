---
title: コマンド
---
# コマンド

VEDA はAtomに以下のコマンドを追加します。

* `Veda: Toggle`
* `Veda: Load Shader` (key: `ctrl-enter`)
* `Veda: Watch Shader` (key: `ctrl-shift-enter`)
* `Veda: Watch Active Editor` (key: `ctrl-alt-enter`)
* `Veda: Stop Watching` (key: `ctrl-.`)
* `Veda: Toggle Fullscreen` (key: `ctrl-escape`)

基本的には `Veda: Toggle` と `Veda: Load Shader` だけで十分でしょう。

## `Toggle`

VEDAを起動/停止します。

## `Load Shader` (key: `ctrl-enter`)

現在のタブで編集中のシェーダーを実行します。

## `Watch Shader` (key: `ctrl-shift-enter`)

現在のタブの編集内容を監視します。
シェーダーを編集すると、自動で実行されます。

## `Watch Active Editor` (key: `ctrl-alt-enter`)

アクティブなタブの編集内容を監視します。
タブを移動すると、そのタブの内容を実行するようになります。

## `Stop Watching` (key: `ctrl-.`)

`watch-shader` および `watch-active-editor` による監視を中止します。

## `Toggle Fullscreen` (key: `ctrl-escape`)

シェーダーの実行結果をウインドウ全体に表示します。
キーボード入力を利用したシェーダーや、スクリーンショットの撮影に便利です。
