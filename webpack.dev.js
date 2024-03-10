/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
const { merge } = require('webpack-merge');

const buildMode = 'development';
const common = require('./webpack.common')(buildMode);

module.exports = merge(common, {
  mode: buildMode,
  devtool: 'inline-source-map',
});