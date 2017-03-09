module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	}
}