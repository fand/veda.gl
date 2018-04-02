const path = require('path');

module.exports = {
  verbose: true,
  swFilePath: path.resolve(__dirname, 'docs/sw.js'),
  staticFileGlobsIgnorePatterns: [/\.next\//],
  minify: true,
  stripPrefix: 'docs/',
  staticFileGlobs: ['docs/**/*'],
  runtimeCaching: [{
    handler: 'cacheFirst',
    urlPattern: /.*\.(jpg|png|gif|svg)/,
  }],
};
