module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'index.js',
  }
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /build|node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
