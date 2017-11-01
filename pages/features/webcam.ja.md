# Webカメラ

<p class="pc-only">以下のボタンを押すと、Webカメラを用いたGLSL表現のサンプルが再生されます。

<button id="enable">Webカメラの使用を許可する</button>

</p>

VEDAでは、Webカメラからの入力をテクスチャとして利用できます。
Settingsで `"camera": true` とすると、 `sampler2D camera` が利用できるようになります。


## 例

以下はこのページをPCで開いた時に実行されるGLSLコードです。

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
```

他のコード例は [examples](https://github.com/fand/veda/blob/master/examples/camera.frag) を見てください。
