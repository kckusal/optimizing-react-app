const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const nrwlWebpack = require('@nrwl/react/plugins/webpack');

module.exports = (config, context) => {
  const nrwlConfig = nrwlWebpack(config);

  const plugins = [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ];

  if (!config.mode.includes('production')) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 3008,
      })
    );
  }

  return merge(nrwlConfig, {
    plugins: [new BundleAnalyzerPlugin()],
  });

  return merge(nrwlConfig, {
    externals: [
      {
        /** These will be supplied in the client-side externally, so don't bundle them. */
        react: 'React',
        'react-dom': 'ReactDOM',
        'oidc-client': 'Oidc',
        moment: 'moment',
        'libphonenumber-js': 'libphonenumber',
        immutable: 'Immutable',
        // 'react-html5-camera-photo': 'Camera',
        'sockjs-client/dist/sockjs': 'SockJS',
        '@ant-design/icons/lib/dist': 'AntDesignIcons',
      },
    ],
    plugins,
    resolve: {
      alias: {
        /* Some of the dependencies might use the lodash-es package instead of lodash. If that’s the case, Lodash will be bundled twice, unless aliased as below. */
        'lodash-es': 'lodash',
      },
    },
  });
};
