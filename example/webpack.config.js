module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.example.js$/, loader: '../lib/loader', enforce: 'pre' },
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
