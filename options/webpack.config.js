const path = require('path');

module.exports = {

  entry: [
    './options/source/scripts/index.js'
  ],

  output: {
    filename: 'options.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'source'),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
