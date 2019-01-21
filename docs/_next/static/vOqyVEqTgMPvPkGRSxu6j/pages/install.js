(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{355:function(n,t,a){__NEXT_REGISTER_PAGE("/install",function(){return n.exports=a(356),{page:n.exports.default}})},356:function(n,t,a){"use strict";a.r(t);var e=a(0),i=a.n(e),l=a(2),o=a(3),s=a(1);t.default=Object(l.b)()(function(){return i.a.createElement(o.a,{path:"/install",article:{en:Object(s.default)('---\ntitle: Install VEDA\n---\n# Install VEDA\n\nLet your editor blink!\n\n![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)\n\n<div align="center" style="line-height: 40px;">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)\n![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)\n</div>\n\n\n\n## 1. Install Prerequisites\n\nVEDA depends on following softwares to be installed:\n\n- Python 2.x\n- glslangValidator\n\n\n### Python 2.x\n\nPython 2.x is required to build native add-ons in VEDA\'s dependency.\nCheck the version of your python with `python -V`.\n\nIf you\'ve already installed both Python 2 and 3, you have to tell npm to use python 2.\nRun `npm config set python python2`.\n\n\n### glslangValidator\n\n`glslangValidator` is used to check GLSL code in VEDA.\nPlease Install it by following the steps below.\n\n\n#### macOS\n\nIf you are uning macOS, glslangValidator can be installed by homebrew.\n\n`brew install glslang`\n\nThe path of glslangValidator can also be specified in the settings of VEDA.\nAdd the path of glslangValidator (e.g.: `/usr/local/bin/glslangValidator`) to `glslangValidator path` property.\n\n#### Windows or Linux\n\nIf you are uning Windows or Linux, the best way to install glslangValidator is to install Vulkan SDK.\nGet the SDK from here:\n\nhttps://www.lunarg.com/vulkan-sdk/\n\nAfter that, add installed glslangValidator to your PATH environment variable.\nIn Windows, glslangValidator will be installed in `C:\\VulkanSDK\\( version )\\Bin`.\n\nThe path of glslangValidator can also be specified in the settings of VEDA.\nAdd the path of glslangValidator (e.g.: `C:\\VulkanSDK( version )\\Bin\\glslangValidator.exe`) to `glslangValidator path` property.\n\n\n## 2. Install VEDA\n\nThen install VEDA from Atom\'s `Settings` view or by `apm` like this:\n\n```bash\napm install vedajs\n```\n\n---\n\nNow VEDA is ready for you!\nRead [USAGE](/usage) to learn how to use it.\n'),ja:Object(s.default)('---\ntitle: VEDAのインストール\n---\n# VEDAのインストール\n\nAtomを光らせよう。\n\n![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)\n\n<div align="center" style="line-height: 40px;">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)\n![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)\n</div>\n\n\n## 1. 事前準備\n\nVEDAは以下のソフトウェアに依存しています。\nまずはこれらをインストールしましょう。\n\n- Python 2.x\n- glslangValidator\n\n\n### Python 2.x\n\nVEDAはNode.jsのネイティブアドオンを利用するため、Python 2系をインストールする必要があります。\n`python -V` を実行して、Pythonのバージョンを確認してください。\n\n既にPython2と3をインストール済みの場合、npmがpython2を参照するように設定します。\nターミナルから `npm config set python python2` を実行して下さい。\n\n\n### glslangValidator\n\n`glslangValidator` はGLSLコードを検証するためのソフトウェアです。\n以下のステップに従ってインストールしてください。\n\n\n#### macOS\n\nhomebrewで簡単にインストールできます。\n\n`brew install glslang`\n\n\n#### Windows or Linux\n\nWindowsとLinuxの場合、Vulkan SDKをインストールするとglslangValidatorもインストールされます。\n以下のサイトからVulkan SDKを入手してください。\n\nhttps://www.lunarg.com/vulkan-sdk/\n\n続いて、glslangValidatorがインストールされた場所を環境変数 `PATH` に加える必要があります。\nWindowsの場合、glslangValidatorは `C:\\VulkanSDK\\( version )\\Bin` にインストールされているはずです。\n\nglslangValidator の場所は、VEDAの設定で指定することもできます。\n\n\n## 2. VEDA本体のインストール\n\nVEDAをAtomの `Settings` タブか、`apm` からインストールできます。\n\n```bash\napm install vedajs\n```\n\n---\n\nこれでVEDAの準備ができました！\n次は [操作方法](/usage?lang=ja) のページでVEDAの基本的な使い方を覚えましょう。\n')},shader:{attach:function(n){n.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = time * .3 + 100.;\n\n  p = p * .5 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    .8,\n    1.0\n  ) * .6;\n}\n")}}})})}},[[355,1,0]]]);