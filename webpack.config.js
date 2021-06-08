const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nrwlWebpack = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  const nrwlConfig = nrwlWebpack(config);

  return merge(nrwlConfig, {
    plugins: [new BundleAnalyzerPlugin()],
  });
};
