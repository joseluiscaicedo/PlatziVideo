const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    //usamos el path para decir donde se va a guardar
    path: path.resolve(__dirname, 'dist'),
    // usamos el resolve para xa detectar el directorio donde estamos
    // y un dist para pasarle un directorio donde guarde los archivos
    filename: 'bundle.js', //usamos filename para darle nombre a nuestro archivo principal
  },
  resolve: {
    //resolvemos las extensiones que vamos a utilizar en este proyecto
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        //pasamos una expresion regular q permita identificar nuestros
        //archivos .js y .jsx
        test: /\.(js|jsx)$/,
        //excluimos carpeta node modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        //crear una nueva regla que nos va a permitir trabajar
        //con los archivos de HTML.
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use:[
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};
