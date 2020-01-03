const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const webpack = require('webpack')
const smp = new SpeedMeasurePlugin()
const os = require('os')

function getIPAdress() {
    var interfaces = os.networkInterfaces()
    for (var devName in interfaces) {
        var iface = interfaces[devName]
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}

const plugins = [
  new webpack.SourceMapDevToolPlugin({})
]

const dev = {
  devServer: {
    host: getIPAdress(),
    compress: true,
    port: 9027,
    quiet: true,
    open: true
  },
  plugins,
  watchOptions: {
    ignored: /node_modules/,
  }
}

module.exports = smp.wrap(merge(base, dev))
