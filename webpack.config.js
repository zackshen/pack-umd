var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		mfactory: './src/mfactory'
	},
	output: {
    path: path.join(__dirname, 'build'),
		filename: '[name].js',
		library: ['[name]'],
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: [".js"],
		alias: {
			'src': path.resolve(__dirname, './src')
		}
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel!eslint',
				include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  }
}
