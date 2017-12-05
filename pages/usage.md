---
title: Usage
---
# Usage

In this page we'll explain the basic usage of VEDA.


## Basic workflow

The workflow of livecoding with VEDA is like this:

1. Launch VEDA with `Veda: Toggle`
2. Run shaders with `Veda: Load Shader` (key: `ctrl-enter`)

So let's start coding!

First、 hit `ctrl-shift-p` (mac: `cmd-shift-p`) to open command palette.
When you type `veda` Atom will suggest `Veda: Toggle`.
Hit `enter` then VEDA will show the result of default shader:

![](/static/images/usage1.gif)

Next, let's create a new GLSL file.
Create new file with `ctrl-n` (mac: `cmd-n`) and save as `myshader.frag`.

Paste this code to the file:

```glsl
precision mediump float;
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void) {
  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;

  float color = 0.0;
  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);
  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);
  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);
  color *= sin(time / 10.0) * 0.5;

  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);
}
```

(As you may notice, this is the default code of [GLSL Sandbox](http://glslsandbox.com/)!)

...then hit `ctrl-enter`.
VEDA will evaluate `myshader.frag` and show the result:

![](/static/images/usage2.gif)

Congratulations!!
Now you can edit the code and see the result with `ctrl-enter`.


## Other commands

Here is the list of all commands:

- `Veda: Toggle`
  - Start / Stop VEDA.
- `Veda: Load Shader` (key: `ctrl-enter`)
  - Load the shader on current editor.
- `Veda: Watch Shader` (key: `ctrl-shift-enter`)
  - Watch current tab and load the shader automatically.
- `Veda: Watch Active Editor` (key: `ctrl-alt-enter`)
  - Watch active tab and run watch-shader automatically.
- `Veda: Stop Watching` (key: `ctrl-.`)
  - Stop `watch-shader` and `watch-active-editor`.

In most cases you only need `Veda: Toggle` and `Veda: Load Shader`.


---

You've started the first step as a live coder!!
See Features for more advanced features.
