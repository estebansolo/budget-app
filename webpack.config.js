// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
	const isProduction = env === 'production';
	const CSSExtract = new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// all options are optional
		filename: 'styles.css',
		ignoreOrder: false // Enable to remove warnings about conflicting order
	});

	return {
		entry: './src/app.js',
		//entry: './src/playground/hoc.js',
		output: {
			path: path.join(__dirname, 'public', 'scripts'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					// loaders:[
					//     'babel-loader'
					// ]
					use: [
						{
							loader: 'babel-loader'
						}
					]
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins: [ CSSExtract ],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/scripts/',
			historyApiFallback: true
		}
	};
};

// Loader
