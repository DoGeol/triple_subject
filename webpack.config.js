const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function setConfig(mode) {
	console.log('process.env.NODE_ENV', process.env.NODE_ENV, mode);
	return {
		mode,
		// entry files
		entry: ['./src/index.js'],
		// 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'js/bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					include: [
						path.resolve(__dirname, 'src/')
					],
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					},
					exclude: /node_modules/
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader'
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			]
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.scss']
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'main.css',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, '/src', 'index.html'),
				filename: 'index.html',
			})
		],
		devServer: {
			contentBase: path.join(__dirname, "src"),
			port: 9000,
			stats: "errors-only",
			hot: true
		},
		devtool: 'source-map',
	};
}

module.exports = (env, arg) => {
	return setConfig(arg.mode);
}