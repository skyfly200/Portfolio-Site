const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.js'
  },
  plugins: [
    new CleanWebpackPlugin(['public'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
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
              outputPath: './',
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
              outputPath: './',
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
              name: '[name].css',
              outputPath: './',
              context: 'app'
            }
          },
          'extract-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: './',
            context: 'app'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './fonts/',
            context: 'app'
          }
        }]
      }
    ]
  }
};
