const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		// publicPath: 'dist/'
	},
	module:{
		rules:[
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
	devServer : {
		contentBase: './src',
		watchContentBase: true,
		overlay: true
	},
	plugins: [
			new ExtractTextPlugin('css/style.css'),
			new HtmlWebpackPlugin({ 
				hash: true,
				template: './src/index.html',
				filename: 'index.html'
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