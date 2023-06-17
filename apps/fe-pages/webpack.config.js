const { composePlugins, withNx } = require('@nx/webpack');
const { merge } = require('webpack-merge');
const SystemJSPublicPathPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = composePlugins(withNx(), (config) => {
  const orgName = 'portfolio';
  const projectName = 'pages';

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
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/i,
          exclude: [/node_modules/, /\.vue\.html$/],
          type: 'asset/source',
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          include: [/node_modules/, /src/],
          exclude: [/\.module\.css$/],
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(bmp|png|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/i,
          exclude: /node_modules/,
          loader: 'svg-inline-loader',
        },
      ],
    },
    plugins: [
      new SystemJSPublicPathPlugin({
        systemjsModuleName: `@${orgName}/${projectName}`,
      }),
    ],
    optimization: {
      runtimeChunk: false,
    },
    externals: ['single-spa', 'single-spa-react'],
    // externals: ['single-spa', 'react', 'react-dom'],
    resolve: {
      extensions: ['.mjs', '.wasm', '.json', '.ts', '.tsx', '.js', '.jsx'],
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
