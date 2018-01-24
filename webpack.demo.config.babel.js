import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './demo/index.js',
  output: {
    path: path.resolve(__dirname, './demo/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './demo/'),
    compress: true,
    port: 3000
  }
}
