---
title: 音声入力
---

# 音声入力

<p class="pc-only">以下のボタンを押すと、音声入力によるGLSL表現のサンプルが再生されます。

<button id="enable">音声入力の使用を許可する</button>

</p>

VEDA では、音声入力からのデータを GLSL 上で利用できます。
[Settings](/settings?lang=ja)で `"audio": true` すると、以下の uniform 変数が利用できるようになります。

- `float volume`
- `sampler2D samples`
- `sampler2D spectrum`

`sampler2D samples` には、音声入力の直近 256 サンプルの値が保存されています。
波形の描画などに利用できます。

`sampler2D spectrum` には FFT の結果が保存されます。
スペクトラムアナライザー等、特定の周波数帯の値を得ることができます。

`float volume` は、`spectrum` における全周波数帯でのボリュームの平均の値です。

詳しくは[examples](https://github.com/fand/veda/blob/master/examples/audio.frag)をご覧ください。

## 例

以下はこのページを PC で開いた時に実行される GLSL コードです。

```glsl
/*{ "audio": true }*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D spectrum;
uniform sampler2D backbuffer;

float random(in vec2 p) { /* 省略 */ }
float noise (in vec2 st) { /* 省略 */ }
float fbm(in vec2 p) { /* 省略 */ }
vec2 rotate(vec2 p, float t) { /* 省略 */ }

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
