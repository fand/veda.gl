/*{ "audio": true }*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D spectrum;
uniform sampler2D backbuffer;

float random(in vec2 p) {
  return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float fbm(in vec2 p) {
  return (
    noise(p * 1.7 + .13) * .5 +
    noise(p * 2.9 + .23) * .25 +
    noise(p * 3.7 + .31) * .125 +
    noise(p * 15.7 + .19) * .125
  );
}

vec2 rotate(vec2 p, float t) {
  return mat2(
    sin(t), -cos(t),
    cos(t), sin(t)
  ) * p;
}

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
