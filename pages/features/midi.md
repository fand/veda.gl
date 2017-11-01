# MIDI input

VEDA supports MIDI input.
When you set `"midi": true` in [Settings](/settings), VEDA enables following uniform variables:

- `sampler2D midi`
- `sampler2D note`

`sampler2D midi` stores MIDI events obtained by Web MIDI API. The size of `midi` is `256x128`. Each pixel stores the last event of the corresponding MIDI Events.

For example, `texture2D(midi, vec2(144. / 256., 0)).x` yields the note number of last `note on` event of MIDI Channel 1.

- `144.` (0x90): `note on` event of MIDI Channel 1
- `.x` (2nd byte): Note number

`sampler2D note` stores the volumes for each note number. The size of `note` is `128x1`. Each pixel stores the volume of the last event for corresponding MIDI note.

For example, `texture2D(note, vec2(60. / 128., 0)).x` yields the volume of note `C4` (Middle C).

See [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) for actual usage.
