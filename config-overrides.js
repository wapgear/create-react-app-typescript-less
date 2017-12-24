'use strict';
var _require = require('react-app-rewired'),
  injectBabelPlugin = _require.injectBabelPlugin;

var rewireLess = require('react-app-rewire-less');
const rewireTypescript = require('react-app-rewire-typescript');
var path = require('path');

module.exports = function override(config, env) {
  config = rewireTypescript(config, env);
  config.resolve.modules.push(path.resolve(__dirname, './src'));
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@font-size-base": "14px",
      "@primary-color": "#6e6ce4",
      "steps-description-max-width": "140px"
    }
  })(config, env);
  return config;
};

