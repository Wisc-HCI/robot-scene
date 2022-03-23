const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource"
    // "@storybook/preset-create-react-app"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(glb)$/,
      use: 'file-loader',
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /\.(patt)$/,
      use: 'file-loader',
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /\.(woff)$/,
      use: 'file-loader',
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /\.(dat)$/,
      use: 'file-loader',
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /\.(zpt)$/,
      use: 'file-loader',
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: /zcv\.wasm$/,
      type: "javascript/auto",
      loader: "file-loader",
    });

    // Return the altered config
    return config;
  },
};
