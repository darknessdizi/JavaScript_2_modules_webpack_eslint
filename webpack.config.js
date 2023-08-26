const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин для CSS файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // работа с файлами css
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // для сборки html файла
      templates: './src/index.html',
      // filename: 'main.html'
    }),
    new MiniCssExtractPlugin(),
  ],
};
