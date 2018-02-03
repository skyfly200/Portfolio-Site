const webpack = require('webpack');
const path = require('path');

// extract styles to external file in production, but bundle in development
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractSass = new ExtractTextPlugin({
//     filename: "public/css/style.css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.pug/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].html',
            outputPath: '../',
            context: 'app'
          }
        }, 'pug-html-loader']
      },
      {
        test: /\.sass$/,
        use: [{
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
        // use: extractSass.extract({
        //   use: [{
        //         loader: "css-loader", options: {
        //             sourceMap: true
        //         }
        //     }, {
        //         loader: "sass-loader", options: {
        //             sourceMap: true
        //         }
        //     }],
        //   fallback: "style-loader" // use style-loader in development
        // })
      }
    ]
  },
  plugins: [
    //extractSass
  ]
};
