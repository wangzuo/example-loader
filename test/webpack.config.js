module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.example$/, loader:  'babel-loader!../lib/loader' }
    ]
  }
};