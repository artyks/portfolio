const { composePlugins, withNx } = require('@nx/webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SystemJSPublicPathPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = composePlugins(withNx(), (config) => {
  const orgName = 'portfolio';
  const projectName = 'root-config';
  const isDev = config.mode === 'development';

  console.log(process.env.NODE_ENV);

  console.log({ mode: config.mode });

  return merge(config, {
    output: {
      libraryTarget: 'system',
      uniqueName: projectName,
      devtoolNamespace: projectName,
      scriptType: 'text/javascript',
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          exclude: [/node_modules/, /\.vue\.html$/],
          type: 'asset/source',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: isDev,
          orgName,
        },
      }),
      new SystemJSPublicPathPlugin({
        systemjsModuleName: `@${orgName}/${projectName}`,
      }),
    ],
    optimization: {
      runtimeChunk: false,
    },
    externals: ['single-spa'],
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.wasm', '.json', '.ts', '.tsx'],
    },
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      client: {
        webSocketURL: {
          hostname: 'localhost',
        },
      },
      allowedHosts: 'all',
    },
  });
});
