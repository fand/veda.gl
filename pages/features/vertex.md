---
title: Vertex Shaders
description: How to run vertex shaders on VEDA
---
### Vertex Shaders

VEDA also supports vertex shaders like [vertexshaderart.com](https://vertexshaderart.com/).

Vertex shaders must be named like `*.vert`.
Create a file `foo.vert` like this:

```glsl
/*{ "vertexCount": 300 }*/
precision mediump float;
attribute float vertexId;
uniform float vertexCount;
uniform float time;
uniform vec2 resolution;
varying vec4 v_color;

void main() {
  float i = vertexId + time *2.;

  vec3 pos = vec3(
    cos(i * 1.0),
    sin(i * 1.1),
    cos(i * 1.2)
  );

  gl_Position = vec4(pos.x, pos.y, pos.z, 1);

  v_color = vec4(fract(vertexId / 3.), 1, 1, 1);
}
```

Then save it and hit `ctrl-enter` to run it.
VEDA will show the result on the background.

See [examples](https://github.com/fand/veda/blob/master/examples/vertex.vert) for more details.
