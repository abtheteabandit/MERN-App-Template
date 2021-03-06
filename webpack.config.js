//webpack.config.js
var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, 'client'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
			},
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	}
}