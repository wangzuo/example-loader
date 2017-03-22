module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.example$/, loader: 'babel-loader!../lib/loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  example: {
    imports: {
      Button: './button',
      'Row, Col': './grid'
    }
  }
};
