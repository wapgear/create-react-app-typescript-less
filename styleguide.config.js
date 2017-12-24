const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const paths = require("react-app-rewired/scripts/utils/paths");
require(paths.scriptVersion + "/config/env");

const webpackConfig = paths.scriptVersion + "/config/webpack.config.dev";
const config = require(webpackConfig);
const override = require(paths.configOverrides);
const overrideFn =
  typeof override === "function"
    ? override
    : override.webpack || ((config) => config);

module.exports = {
  components: 'src/components/**/*.{tsx}',
  require: [
    path.resolve(__dirname, 'styleguide/setup.js')
  ],
  webpackConfig: overrideFn(config, process.env.NODE_ENV),
};