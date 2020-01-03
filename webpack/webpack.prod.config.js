const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

const smp = new SpeedMeasurePlugin()

const prod = {
  plugin: [
    new CleanWebpackPlugin()
  ]
}

module.exports = smp.wrap(merge(base, prod))
