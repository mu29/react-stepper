module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'Stepper.js',
    library: 'Stepper',
    libraryTarget: 'umd',
  },
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
