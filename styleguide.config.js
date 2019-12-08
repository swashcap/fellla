const path = require('path');
const pkg = require('./package.json');

module.exports = {
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'rsg/Wrapper'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          exclude: [path.resolve(__dirname, 'node_modules')],
          loader: 'babel-loader',
          test: /\.tsx?$/,
        },
      ],
    },
    resolve: {
      alias: {
        ...pkg.alias,
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  },
};
