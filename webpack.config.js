const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const nrwlWebpack = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  const nrwlConfig = nrwlWebpack(config);

  return merge(nrwlConfig, {
    externals: [
      {
        /** These will be supplied in the client-side externally, so don't bundle them. */
        react: 'React',
        'react-dom': 'ReactDOM',
        moment: 'moment',
      },
    ],
    plugins: [new BundleAnalyzerPlugin()],
  });
};
