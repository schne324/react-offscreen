import path from 'path';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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
  plugins: [new UglifyJSPlugin()]
};
