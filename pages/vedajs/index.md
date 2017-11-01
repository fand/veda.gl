<div align="center">
  <img alt="logo" src="https://user-images.githubusercontent.com/1403842/28923702-d8155d46-7899-11e7-817b-1193d138e5b8.png" width="192"/>

  <h1>VEDA.js</h1>
  <i>Shader Art Framework for Web</i>

  ![npm version](https://img.shields.io/npm/v/vedajs.svg) ![license MIT](https://img.shields.io/npm/l/vedajs.svg) [![hashtag #vedajs](https://img.shields.io/badge/hashtag-vedajs-blue.svg)](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd)
</div>


## What is VEDA.js?

VEDA.js is a JavaScript framework to run GLSL shaders on browsers.
It was originally created as a GLSL engine of [VEDA](https://atom.io/packages/veda), but we realized that it's useful to run shaders on browsers so published VEDA.js as a standalone library.


## Install

You can install VEDA.js with `npm` or `yarn`.

```bash
npm install vedajs
```


## Usage

```js
import Veda from 'vedajs';

const veda = new Veda();

veda.setCanvas(canvas);
veda.loadFragmentShader(code);

veda.play();
```


## Advanced Usage

### Fragment shader

```js
veda.loadFragmentShader(code);
```

This is equivalent to

```js
veda.loadShader({ fs: code });
```


### Vertex shader

```js
veda.loadVertexShader(code);
```

This is equivalent to

```js
veda.loadShader({ vs: code });
```


### Using both

Pass a shader object to `loadShader`.

```js
veda.loadShader({
  vs: vertexShaderCode,
  fs: fragmentShaderCode,
});
```


### Multipass rendering

VEDA.js supports multipass rendering.
Pass `loadShader` an array of shaders corresponding to each rendering pass.

```js
veda.loadShader([{
  vs: vertexShaderFor1stPass,
  fs: fragmentShaderFor1stPass
}, {
  fs: fragmentShaderFor2ndPass
}]);
```


### Audio input

```js
veda.toggleAudio(true);
veda.loadShader(shader);
```


### MIDI input

```js
veda.toggleMidi(true);
veda.loadShader(shader);
```


### WebCam input

```js
veda.toggleCamera(true);
veda.loadShader(shader);
```


## Keyboard input

```js
veda.toggleKeyboard(true);
veda.loadShader(shader);
```


## Gamepad input

```js
veda.toggleGamepad(true);
veda.loadShader(shader);
```


## Author

Takayosi Amagi

- Website: [gmork.in](https://gmork.in)
- Twitter: [@amagitakayosi](https://twitter.com/amagitakayosi)
- GitHub: [fand](https://github.com/fand)


## LICENSE

MIT
