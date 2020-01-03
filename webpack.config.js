const devConfig = require('./webpack/webpack.dev.config.js')
const prodConfig = require('./webpack/webpack.prod.config.js')

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
