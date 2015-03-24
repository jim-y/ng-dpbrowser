module.exports = {
	entry: "./app.es6",
	output: {
		path: __dirname,
		filename: "build/bundle.js"
	},
	module: {
		loaders: [{
			test: /\.es6$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.es6']
	}
};
