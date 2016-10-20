module.exports = {
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
