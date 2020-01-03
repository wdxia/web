'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// copy-webpack-plugin
const CopyPlugin = require('copy-webpack-plugin')
const resolve = dir => path.resolve(__dirname, dir)

const { NODE_ENV } = process.env

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'Hello,webpack!',
    template: path.resolve(__dirname, '../public/index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }
  }),
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name]_[contenthash:8].css'
  }),
  new OptimizeCssAssetsWebpackPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano')
  }),
  new FriendlyErrorsWebpackPlugin()
]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg|svgz)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 102400,
            esModule: false
          }
        }
      },
      { 
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'postcss-loader'
        ] 
      },
      { 
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ] 
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `vue-loader` options
        }
      }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, "../src")
    }
  }
}
