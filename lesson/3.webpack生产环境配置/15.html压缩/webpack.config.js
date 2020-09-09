const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
	entry: './src/js/index.js',
	output: {
		filename: 'js/built.js',
		path: resolve(__dirname, 'build'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// 压缩html代码
			minify: {
				// 移除空格
				collapseWhitespace: true,
				// 移除注释
				removeComments: true,
			},
		}),
	],
	mode: 'production',
=======
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ],
  mode: 'production'
>>>>>>> 99b66cc10789364ca0252361fe2eaae1a828c133
};
