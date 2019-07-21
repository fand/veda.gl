---
title: Audio Input
---

# Audio Input

<p class="pc-only">Click this button to see an example of GLSL using audio inputs.

<button id="enable">Allow GLSL to use audio inputs</button>

</p>

VEDA supports audio input.
When you set `audio: true` in [Settings](/settings), VEDA enables following uniform variables:

- `float volume`
- `sampler2D samples`
- `sampler2D spectrum`

`sampler2D samples` stores the most recent 256 frames from the audio input.
This is useful for drawing waveforms.

`sampler2D spectrum` stores the FFT result.
This is useful to draw the volume of specific frequency band, such as spectrum visualizer.

`float volume` is the average of all the frequency bands in `spectrum`.

See [examples](https://github.com/fand/veda/blob/master/examples/audio.frag) for more details.

## Example

This is the code running on this page (PC only).

```glsl
/*{ "audio": true }*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D spectrum;
uniform sampler2D backbuffer;

float random(in vec2 p) { ... }
float noise (in vec2 st) { ... }
float fbm(in vec2 p) { ... }
vec2 rotate(vec2 p, float t) { ... }

void main() {
  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
  vec2 uv = gl_FragCoord.xy / resolution;

  float a = atan(p.y, p.x);
  float l = length(p);
  p += fbm(vec2(p + l * 20. + a * sin(time * .3) * 10.)) * .2;

  p = vec2(length(p - .1));
  p -= time * .3;

  gl_FragColor = vec4(
    texture2D(spectrum, mod(p * .39 - time * .19, .7)).r,
    texture2D(spectrum, mod(p * .31 - time * .13, .54)).r,
    texture2D(spectrum, mod(p * .37 - time * .17, .6)).r,
    1.
  ) + texture2D(backbuffer, uv)*.8;
}
```
