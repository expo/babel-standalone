const webpack = require('webpack');
const { version } = require('@babel/core/package.json');

module.exports = {
  entry: './index',
  mode: 'development',
  node: {
    // Mock Node.js modules that Babel require()s but that we don't
    // particularly care about.
    fs: 'empty',
    module: 'empty',
    net: 'empty',
  },
  output: {
    filename: 'babel-standalone.js',
    library: 'babel-standalone',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({
      BABEL_VERSION: JSON.stringify(version),
      VERSION: JSON.stringify(version),
    }),
  ],
};
