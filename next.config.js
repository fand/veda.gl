const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  webpack(config) {
    // Workaround for build error caused by UglifyJs.
    // See https://github.com/zeit/next.js/issues/1253
    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false;
      }
      return true;
    });

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new MinifyPlugin());
    }

    const rulesExceptBabelLoaderRule = config.module.rules.slice(0, -1);
    const babelLoaderRule = config.module.rules.slice(-1)[0];

    return Object.assign({}, config, {
      module: Object.assign({}, config.module, {
        rules: [
          ...rulesExceptBabelLoaderRule,
          {
            test: babelLoaderRule.test,
            include: babelLoaderRule.include,
            exclude: babelLoaderRule.exclude,
            use: [
              'babel-inline-import-loader',
              {
                loader: 'babel-loader',
                options: Object.assign({}, babelLoaderRule.options, {
                  // Disable cacheDirectory so that Babel
                  // always rebuilds dependent modules
                  cacheDirectory: false,
                }),
              },
            ],
          },
        ],
      }),
    });
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/install': { page: '/install' },
      '/usage': { page: '/usage' },
      '/settings': { page: '/settings' },
      '/features': { page: '/features' },
      '/features/image': { page: '/features/image' },
      '/features/audio': { page: '/features/audio' },
      '/features/midi': { page: '/features/midi' },
      '/features/osc': { page: '/features/osc' },
      '/features/webcam': { page: '/features/webcam' },
      '/features/keyboard': { page: '/features/keyboard' },
      '/features/gamepad': { page: '/features/gamepad' },
      '/vedajs': { page: '/vedajs' },
      '/faq': { page: '/faq' },
      '/contributing': { page: '/contributing' },
    };
  },
};
