---
title: MIDI Input
---
# MIDI input

VEDA supports MIDI input.
When you set `"midi": true` in [Settings](/settings), VEDA enables following uniform variables:

- `sampler2D midi`
- `sampler2D note`

## `sampler2D midi`

`sampler2D midi` stores MIDI events obtained by Web MIDI API. The size of `midi` is `256x128`. Each pixel stores the last event of the corresponding MIDI Events.

For example, `texture2D(midi, vec2(176. / 256., 8. / 128.)).x` yields the value of CC message of CC#8 sent to Channel 1.

- `176.` (0xB0): Control Change of Channel \#1
- `8.` (0x08): Control Number
- `.x` (3nd byte): Value

See [MIDI Event Table](http://www.onicos.com/staff/iz/formats/midi-event.html) to lookup the coordinate.

## `sampler2D note`

`sampler2D note` stores the volumes for each note number. The size of `note` is `128x1`. Each pixel stores the volume of the last event for corresponding MIDI note.

For example, `texture2D(note, vec2(60. / 128., 0)).x` yields the velocity of note `C4` (Middle C).

See [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) for actual usage.
