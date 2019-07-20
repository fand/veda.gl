---
title: Server Mode
---
### Server Mode

If you wanna show shaders on other displays, you can use server mode.

When `server` is specified in settings, VEDA runs in server mode.
VEDA launches a local web server to show the shaders in browsers instead of the background of Atom.

Add this setting at the top of the shader, then open `http://localhost:3000`.

```glsl
/*
{
  "server": 3000,
}
*/
```

When you edit the shader and hit `ctrl-enter`, VEDA immediately send the shader to the browser.
To show the shaders fullscreen, use the features of browsers.

See an [example](./examples/server.frag) for actual usage.



### Note

Server Mode requires Node.js.
Please download and install Node.js from here:

https://nodejs.org/ja/

Currently we can't use videos/images outside the project directory in server mode.
