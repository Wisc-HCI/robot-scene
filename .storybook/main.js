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
    "@storybook/addon-knobs"
    // "@storybook/preset-create-react-app"
  ],
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

    // config.resolve.mainFields = [
    //   'es2016',
    //   'browser',
    //   'module',
    //   'main',
    // ]

    // Return the altered config
    return config;
  },
};
