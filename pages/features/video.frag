precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D video1;
uniform sampler2D backbuffer;

void main() {
    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
    p = abs(p);

    if (mod(time, 10.) < 5.) {
        p *= p;
    }

    gl_FragColor = texture2D(video1, p) * .2;

    vec2 uv = gl_FragCoord.xy / resolution;
    gl_FragColor += texture2D(backbuffer, uv) * .8;
}
