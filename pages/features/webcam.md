---
title: WebCam Input
---
# WebCam Input

<!-- <p class="pc-only">Click this button to see an example of GLSL using WebCam.

<button id="enable">Allow GLSL to use WebCam inputs</button>

</p> -->

VEDA supports WebCam input.
When you add `"camera": true` to settings, VEDA enables `sampler2D camera`.


<!-- ## Example

This is the code running on this page (PC only).

```glsl
/*{ "camera": true }*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D camera;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    uv.x = 1. - uv.x;
    float a = atan(p.y, p.x) * 2.;
    float s = mod(a + time * .07, .13) + mod(a - time * .08, .17);
    gl_FragColor = texture2D(camera, uv + s * .1) * vec4(.2, .4, .8, 1.);
}
``` -->

See [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) for another example.
