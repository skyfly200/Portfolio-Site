const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  devtool: "source-map",
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['@babel/preset-env'],
            //plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].html',
              outputPath: '../',
              context: 'app'
            }
          },
          'extract-loader',
          'html-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: '../',
              context: 'app'
            }
          },
          'extract-loader',
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
              outputPath: '../',
              context: 'app'
            }
          },
          'extract-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: '../',
            context: 'app'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
