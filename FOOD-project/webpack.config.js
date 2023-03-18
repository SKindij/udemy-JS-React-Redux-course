'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './jsw/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/jsw'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
