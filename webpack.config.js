module.exports = {
	entry: './dev/js/app.js',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		historyApiFallback: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [["es2015", { "modules": false, "loose": true }], 'react'],
					plugins: ["transform-object-rest-spread", "transform-decorators-legacy"],
					env: {
						test: {
							plugins: ["transform-object-rest-spread", "transform-es2015-modules-commonjs", "transform-decorators-legacy"]
						}
					}
				}
			},
			{
				test: /(\.css)$/,
				loaders: ['style-loader', 'css-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=assets/fonts/[name].[ext]'
			}]
	},

}