---
title: Gamepad Input
---
# Gamepad Input

VEDA supports gamepad inputs using Gamepad API.
When you add `"gamepad": true` to [Settings](/settings), VEDA enables this uniform variable:

- `sampler2D gamepad`

`sampler2D gamepad` stores the status of gamepads connected to the PC.
The size of `gamepad` is `128x2`.
The status of buttons and axes are stored in `y = 0.0` and `y = 1.0`.

For example, `texture2D(gamepad, vec2(3. / 128., 0.)).r` returns `1.0` when the 3rd button is pressed.

See [examples](https://github.com/fand/veda/blob/master/examples/gamepad.frag) for more detail.
