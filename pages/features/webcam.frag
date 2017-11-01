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
