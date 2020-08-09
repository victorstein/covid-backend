const path = require('path')
const nodeExternals = require('webpack-node-externals')
require('dotenv').config()

const { NODE_ENV } = process.env

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  resolve: {
    extensions: ['.ts']
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'ts-loader'
    }]
  },
  mode: NODE_ENV,
  target: 'node',
  node: {
    __dirname: true
  },
  externals: [nodeExternals()]
}
