const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GOBAL_CSS_REGEXP = /\.global\.css/;

function setupDevtool() {
	if(IS_DEV) return 'eval';
	if(IS_PROD) return false;
}

module.exports = {
	resolve: {
		extensions: ['.js','.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@assets' : path.resolve(__dirname, 'src/assets/'),
			'@utils' : path.resolve(__dirname, 'src/utils/')
		}
	},
	mode: NODE_ENV ? NODE_ENV  : 'development',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader']
			},
			{
				test:  /\.css$/,
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]'
							}
						}
					}
					
				],
				exclude: GOBAL_CSS_REGEXP
			},
			{
				test: GOBAL_CSS_REGEXP,
				use: ['style-loader', 'css-loader']
			}, 
			{
				test: /\.svg$/,
				// issuer: /\.[jt]sx?$/,
				use: [ 
					{ 
						loader: 'svg-sprite-loader', 
						options: { outputPath: './src/assets/icons/'}
					}
				]
			}
		],
		
	},
	plugins: [
		new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html')})
	],
	devServer: {
		port: 3000,
		open: true,
		hot: IS_DEV
	},
	devtool: setupDevtool(),
	


}
