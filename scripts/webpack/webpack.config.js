const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve('./src'),
      ],
      extensions: [ '.tsx', '.ts', '.js' ]
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
