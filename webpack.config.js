const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { DefinePlugin } = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GOBAL_CSS_REGEXP = /\.global\.css/;

const PORT = process.env.PORT || 3000;

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
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		publicPath: '/',
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
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			},
		],
		
	},
	plugins: [
		new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html')}),
		new SpriteLoaderPlugin({
			plainSprite: true, 
			spriteAttrs: {
				id: 'icons'
		  	}
		}),
		new DefinePlugin({"process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'`})
	],
	devServer: {
		port: PORT,
		open: true,
		hot: IS_DEV,
		historyApiFallback: true

	},
	devtool: setupDevtool(),

}
