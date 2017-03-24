module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.example$/, loader: 'babel-loader!../lib/loader' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
