const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
      'plotly.js-basic-dist': 'Plotly'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader'
          }
      ]
  },
  plugins: [ // https://github.com/preactjs/preact-compat/issues/161#issuecomment-590806041
      new webpack.ProvidePlugin({
          h: ['preact','h']
      })
  ],
  stats: {
      colors: true
  },
  devServer: {
      host: '0.0.0.0',
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
  },
  devtool: 'source-map'
};