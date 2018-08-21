---
title: Keyboard Input
---
# Keyboard Input

<p class="pc-only">A fragment shader using keyboard inputs is running in this page.
  Hit any key and see what's happening!

</p>


VEDA supports keyboard input.
When you add `"keyboard": true` to [Settings](/settings), VEDA enables this uniform variable:

- `sampler2D key`

The size of `sampler2D key` is `256x1`.
The state of key input is stored in x corresponding to the keycode.

For example, `texture2D(key, vec2(65. / 256.)).r` is `1.0` while key `a` (code: 65) is pressed.

See [examples](https://github.com/fand/veda/blob/master/examples/key.frag) for more detail.

## Fullscreen Mode

VEDA provides fullscreen mode for shaders which use keyboard inputs.
When you run `Veda:Toggle Fullscreen` (`ctrl + escape`), VEDA hides all elements in the editor except for the shader canvas.
(Run again to show the elements again)
Then you can play with keyboard inputs without changing files.
