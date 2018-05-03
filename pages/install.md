---
title: Install VEDA
---
# Install VEDA

Let your editor blink!

![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)

<div align="center" style="line-height: 40px;">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)
![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)
</div>



## 1. Install Prerequisites

VEDA depends on following softwares to be installed:

- Python 2.x
- glslangValidator


### Python 2.x

Python 2.x is required to build native add-ons in VEDA's dependency.
Check the version of your python with `python -V`.

If you've already installed both Python 2 and 3, you have to tell npm to use python 2.
Run `npm config set python python2`.


### glslangValidator

`glslangValidator` is used to check GLSL code in VEDA.
Please Install it by following the steps below.


#### macOS

If you are uning macOS, glslangValidator can be installed by homebrew.

`brew install glslang`

The path of glslangValidator can also be specified in the settings of VEDA.
Add the path of glslangValidator (e.g.: `/usr/local/bin/glslangValidator`) to `glslangValidator path` property.

#### Windows or Linux

If you are uning Windows or Linux, the best way to install glslangValidator is to install Vulkan SDK.
Get the SDK from here:

https://www.lunarg.com/vulkan-sdk/

After that, add installed glslangValidator to your PATH environment variable.
In Windows, glslangValidator will be installed in `C:\VulkanSDK\( version )\Bin`.

The path of glslangValidator can also be specified in the settings of VEDA.
Add the path of glslangValidator (e.g.: `C:\VulkanSDK( version )\Bin\glslangValidator.exe`) to `glslangValidator path` property.


## 2. Install VEDA

Then install VEDA from Atom's `Settings` view or by `apm` like this:

```bash
apm install vedajs
```

---

Now VEDA is ready for you!
Read [USAGE](/usage) to learn how to use it.
