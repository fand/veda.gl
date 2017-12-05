---
title: OSC Input
---
# OSC Input

VEDA supports OSC inputs.
You can use VEDA in sync with SuperCollider, TouchDesigner, openFrameworks, etc!

![OSC example](/static/images/osc.gif)

To enable OSC, specify the port number in the settings.
When you add `"osc": 4000` to the settings, messages will be stored and passed as textures:

- Texture name will be automatically generated from addresses.
  - `/foo`: `sampler2D osc_foo`
  - `/foo/bar`: `sampler2D osc_foo_bar`
- Arguments are translated to float. Strings are ignored.
  - `/foo 0.1 hello 100` yields a texture that contains `[0.1 0 100]`

See [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.
