const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.pug/,
        use: ['html-loader', 'pug-html-loader']
      }
    ]
  }
};
