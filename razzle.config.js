const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');

module.exports = {
  modify: (config, { target }) => {
    config.resolve.modules.unshift(path.resolve(__dirname, './src'));
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new LoadablePlugin({
          filename: './build/loadable-stats.json',
        }),
      ],
    };
  },
};