const path = require('path');

module.exports = (storybookBaseConfig) => {

  storybookBaseConfig.module.rules.push({
    test: /\.less/,
    loaders: ["style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, '../')
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(ts|tsx)?$/,
    use: [
      { loader: 'ts-loader' }
    ]
  });

  storybookBaseConfig.resolve.modules.push(path.resolve(__dirname, '../src'))
  storybookBaseConfig.resolve.extensions.push('.ts', '.tsx');
  return storybookBaseConfig;
};