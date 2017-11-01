# CONTRIBUTING

## Feature Requests & Bug Reports

If you find bugs, or wanna request new features, open an issue on GitHub:

https://github.com/fand/atom-veda/issues

Or you can ask us on [hashtag \#VEDAJS](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd) and [TOPLAP Slack](https://toplap.org/toplap-on-slack/).

Ask us anything anytime!😸


## Development

We're always waiting for your Pull Request!

- https://github.com/fand/atom-veda
- https://github.com/fand/vedajs

For VEDA development, you have to clone [fand/veda](https://github.com/fand/veda) and [fand/vedajs](https://github.com/fand/vedajs).
Prepare these repository by following instruction.


### 1. Fork & clone [fand/vedajs](https://github.com/fand/vedajs)

VEDA.js is the GLSL engine of VEDA.
Prepare it first to refer from Atom package.

First, fork fand/vedajs on GitHub.

https://github.com/fand/vedajs

Next、run following command on the terminal:

```bash
git clone https://github.com/(YOUR_GITHUB_USERNAME)/vedajs
cd vedajs
yarn
yarn link
```

### 2. Fork & clone [fand/veda](https://github.com/fand/veda)

`fand/veda` is the core of VEDA Atom package.
We have to make Atom see fand/veda on your local PC.

Fork fand/veda on GitHub.

https://github.com/fand/veda

Then run following commands:

```bash
git clone https://github.com/(YOUR_GITHUB_USERNAME)/veda
cd veda
yarn
yarn link vedajs  # link vedajs on your PC
apm link  # Make Atom see fand/veda on your PC
```


### 3. Edit the code

Now your Atom runs the code on your local PC.
Create a new branch, fix the code, and `git commit`.


### 4. Test

Run tests and make sure the code isn't broken.
If your fix is testable, add test cases.

```bash
npm run test
```


### 5. Create Pull Request

Push your code to GitHub and create Pull Request.

https://github.com/fand/veda/pulls

That's all!
Thank you for your contribution!!🙌


## Documentation

This website is hosted on GitHub Pages.
If you find something wrong, open an issue on fand/veda.gl.

https://github.com/fand/veda.gl
