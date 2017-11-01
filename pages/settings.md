# Settings

VEDA has 3 ways to change settings: `Global Settings`, `Project Settings` and `File Settings`.

The order of priority is `File Settings > Project Settings > Global Settings`.
For example, when you set `"audio": false` in Project Settings and `"audio": true` in File Settings, VEDA enables audio inputs.


## Global Settings

You can set Global Settings from Atom's `Settings` > `Packages` menu.
You can set these properties in the Settings pane.

- `glslangValidator path`
  - ref. [Install `glslslangValidator`](/atom#glslslangvalidator)
- `Pixel Ratio`:
  - Ratio of pixel-per-rendering call
  - Increasing this will reduce CPU/GPU load
- `Frameskip`
  - Number of frames to skip rendering
  - e.g. If Frameskip is `2` FPS is `30` (= 60 / 2)
- `Vertex Count`
  - Number of vertices in vertex shader
- `Vertex Mode`
  - How to draw vertices


## Project Settings

Project settings is loaded from `.vedarc` on your project root.

`.vedarc` is parsed as [JSON5](https://github.com/json5/json5) format.
It's almost the same as JSON, but it's more easy to write:

```js
{
  "audio": true, // Enable audio input
  "camera": true, // Enable WebCam input

  IMPORTED: { // "" is not necessary
    image: {
      "PATH": "./images/1.jpg",
    },
  },  // trailing-comma is OK
}
```

`.vedarc` is loaded on startup and reloaded automatically when you edit it.


## File Settings

You can also write settings specific for the file.
Write comments on the head of the file like this:

```glsl
/*{
  "audio": true,  // Audio input is enabled only in this file
}*/
void main() {
  ...
}
```


## Which one should I use?

Use `.vedarc` for settings such as loading images / videos you use in the project.
Otherwise, write settings to file comment as File Settings.
