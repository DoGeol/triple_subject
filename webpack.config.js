const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function setConfig(mode) {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV, mode);
  return {
    mode,
    entry: ['./src/index.jsx'],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve(__dirname, 'src/')],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[contenthash].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '/src', 'index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      port: 9000,
      stats: 'errors-only',
      hot: true,
    },
    devtool: 'source-map',
  };
}

module.exports = (env, arg) => {
  return setConfig(arg.mode);
};
