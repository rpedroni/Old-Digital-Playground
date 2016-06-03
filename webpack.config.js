
var path = require('path')
var webpack = require('webpack')

const APP_PATH = path.resolve(__dirname, 'app')
const BUILD_PATH = path.resolve(__dirname, 'build')
const PUBLIC_PATH = path.resolve(__dirname, 'public')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:1234',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(APP_PATH, 'index')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        include: APP_PATH
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      cont: path.resolve(APP_PATH, 'containers'),
      comp: path.resolve(APP_PATH, 'components'),
      actions: path.resolve(APP_PATH, 'actions'),
      style: path.resolve(PUBLIC_PATH, 'style'),
      mui: path.resolve('node_modules/material-ui'),
    }
  },
}
