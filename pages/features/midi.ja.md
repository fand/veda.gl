---
title: MIDI入力
---
# MIDI入力

VEDAでは、MIDI入力からのイベントをGLSL上で利用できます。
[Settings](/settings?lang=ja)で `"midi": true` すると、以下のuniform変数が利用できるようになります。

- `sampler2D midi`
- `sampler2D note`

`sampler2D midi` には、Web MIDI APIによって取得したMIDIイベントの値が保存されています。
`midi` のサイズは `256x128` となっています。
各ピクセルは、対応するチャンネルの直近のMIDIイベントの値を表しています。

例えば、 `texture2D(midi, vec2(144. / 256., 0)).x` はMIDIチャンネル \#1の `note on` イベントのノートナンバーになります。

- `144.` (0x90): MIDIチャンネル \#1の `note on` イベント
- `.x` (2nd byte): ノートナンバー

`sampler2D note` には、各MIDIノートの値が保存されています。.
`note` のサイズは `128x1` となっています。
各ピクセルの値は、対応するノートナンバーの現在のベロシティを表しています。

例えば、 `texture2D(note, vec2(60. / 128., 0)).x` には `C4` (中央のド) のベロシティが保存されています。

詳しくは [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) をご覧ください。
