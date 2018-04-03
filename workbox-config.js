module.exports = {
  globDirectory: 'docs/',
  globPatterns: [
    '**/*.{js,html,png,xml,ico,json,svg,eot,ttf,woff,woff2,jpg,gif,mp4}'
  ],
  swDest: 'docs/sw.js',
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // up to 10MB
  runtimeCaching: [{
    handler: 'cacheFirst',
    urlPattern: /.*\.(jpg|png|gif|svg)/,
  }],
};
