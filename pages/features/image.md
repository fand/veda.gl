---
title: Loading Images & Videos
description: How to use images as textures in GLSL with VEDA.js
---
# Loading images & videos

VEDA supports loading arbitrary images & video files.
When you add `IMPORTED` to your settings, VEDA load the files and passes them to GLSL as textures.

```js
{
  "IMPORTED": {
    "image1": {
      "PATH": "./image1.png",
    },
    "image2": {
      "PATH": "https://veda.gl/static/images/2.jpg",
    },    
    "video1": {
      "PATH": "./video1.mov",
      "SPEED": "2",  // 2倍速で再生される
    },    
    "video2": {
      "PATH": "./video2.mp4",
      "SPEED": "2",  // 2倍速で再生される
    },    
  }    
}
```

The structure of `IMPORTED` is based on [Iteractive Shader Format](https://www.interactiveshaderformat.com/).


## Example

This is the code running on this page (PC only).
It's executable on VEDA.

```glsl
/*{
  "IMPORTED": {
    "image1": {
      "PATH": "https://veda.gl/static/images/1.jpg",
    },
    "image2": {
      "PATH": "https://veda.gl/static/images/2.jpg",
    },
  }
}*/
precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D image1;
uniform sampler2D image2;
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
    vec2 uv0 = (uv - .5) * .9 + .5;

    float z = 19.01;
    float t = time * .2;
    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;
    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;

    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);
}
```


---

Photo by [Dick Thomas Johnson - Akihabara](https://www.flickr.com/photos/31029865@N06/23850480454)
