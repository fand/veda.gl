/*{
  "keyboard": true,
  "IMPORTED": {
    "font": { "PATH": "./images/font.png" },
  }
}*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D key;
uniform sampler2D font;
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

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;

    vec2 uv2 = (uv - .5) * 2. + .5;
    uv2 = clamp(uv2, 0., 1.);

    // Background
    gl_FragColor = vec4(
      noise(uv * 2.23 + vec2(.7, 0) * sin(time * .39 + 1.)),
      noise(uv * 2.27 + vec2(.8, 0) * sin(time * .37 + 3.)),
      noise(uv * 2.21 + vec2(.9, 0) * sin(time * .49 + 8.)),
      1.
    ) * .05;

    // Characters
    float code = 0.;

    if (texture2D(key, vec2(65. / 256.)).r > .0) { code = 65.; }
    if (texture2D(key, vec2(66. / 256.)).r > .0) { code = 66.; }
    if (texture2D(key, vec2(67. / 256.)).r > .0) { code = 67.; }
    if (texture2D(key, vec2(68. / 256.)).r > .0) { code = 68.; }
    if (texture2D(key, vec2(69. / 256.)).r > .0) { code = 69.; }
    if (texture2D(key, vec2(70. / 256.)).r > .0) { code = 70.; }
    if (texture2D(key, vec2(71. / 256.)).r > .0) { code = 71.; }
    if (texture2D(key, vec2(72. / 256.)).r > .0) { code = 72.; }
    if (texture2D(key, vec2(73. / 256.)).r > .0) { code = 73.; }
    if (texture2D(key, vec2(74. / 256.)).r > .0) { code = 74.; }
    if (texture2D(key, vec2(75. / 256.)).r > .0) { code = 75.; }
    if (texture2D(key, vec2(76. / 256.)).r > .0) { code = 76.; }
    if (texture2D(key, vec2(77. / 256.)).r > .0) { code = 77.; }
    if (texture2D(key, vec2(78. / 256.)).r > .0) { code = 78.; }
    if (texture2D(key, vec2(79. / 256.)).r > .0) { code = 79.; }
    if (texture2D(key, vec2(80. / 256.)).r > .0) { code = 80.; }
    if (texture2D(key, vec2(81. / 256.)).r > .0) { code = 81.; }
    if (texture2D(key, vec2(82. / 256.)).r > .0) { code = 82.; }
    if (texture2D(key, vec2(83. / 256.)).r > .0) { code = 83.; }
    if (texture2D(key, vec2(84. / 256.)).r > .0) { code = 84.; }
    if (texture2D(key, vec2(85. / 256.)).r > .0) { code = 85.; }
    if (texture2D(key, vec2(86. / 256.)).r > .0) { code = 86.; }
    if (texture2D(key, vec2(87. / 256.)).r > .0) { code = 87.; }
    if (texture2D(key, vec2(88. / 256.)).r > .0) { code = 88.; }
    if (texture2D(key, vec2(89. / 256.)).r > .0) { code = 89.; }

    float x = mod(code, 16.) / 16.;
    float y = 1. - ((floor(code / 16.) + 1.) / 16.);
    gl_FragColor += vec4(texture2D(font, vec2(x, y) + uv2 / 16.).r) * clamp(code, 0., 1.) * noise(uv2 * 3. + time * 2.);

    // Melting
    gl_FragColor += vec4(
      texture2D(backbuffer, uv + vec2(0, .003) * (1. + noise(uv * 13. + time) * 2.)).r,
      texture2D(backbuffer, uv + vec2(0, .003) * (1. + noise(uv * 17. + time) * 2.)).g,
      texture2D(backbuffer, uv + vec2(0, .003) * (1. + noise(uv * 11. + time) * 2.)).b,
      1.
    ) * .96;
}
