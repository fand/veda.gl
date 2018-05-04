---
title: Fragment Shaders
description: How to run fragment shaders on VEDA
---
# Fragment Shaders

You can run fragment shaders like [GLSL Sandbox](http://glslsandbox.com) on VEDA.

Fragment shaders must be named like `*.frag`.
Create a file `foo.frag` like this:

```glsl
precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);
}
```

Then save it and hit `ctrl-enter` to run it.
VEDA will show the result on the background.
