const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = [
  {
    entry:  {
      index: './src/index.tsx'
    },
    output: {
      path: path.join(__dirname, '../../dist'),
      filename: '[name].[chunkhash].bundle.js',
    },
    mode: process.env.WEBPACK_MODE || 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'css-loader'
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.sass$/,
          use: [
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(j|t)s(x)?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve('./src'),
      ],
      extensions: [ '.tsx', '.ts', '.js' ],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: './tsconfig.json',
          extensions: ['.ts', '.tsx', '.js'],
          baseUrl: '.'
        })
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        inject: true,
        chunks: ['index']
      }),
    ]
  }
];
