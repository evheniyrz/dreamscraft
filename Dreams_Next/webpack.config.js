const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const conf = {
	entry: {
	  app: [path.resolve(__dirname, 'src',	'index.js')]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
		// publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//exlude: 'node_module'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	devServer: {
		contentBase: './src',
		watchContentBase: true,
		overlay: true
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new ExtractTextPlugin('css/style.css'),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			hash: false,
			inject: true,
			compile: true,
			favicon: false,
			minify: false,
			cache: true,
			showErrors: true,
			//chunks: 'all',
			//excludeChunks: [],
			title: 'App',
			xhtml: true
		})

	]
};

module.exports = (env, options) => {
	let produc = options.mode === 'productions';
	conf.devtool = produc
		? false
		: 'eval-source';
	return conf;
}
/**/