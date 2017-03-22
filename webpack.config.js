const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.example$/, loader: 'babel-loader!../lib/loader' }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.example$/,
      options: {
        example: {
          imports: {
            Button: './button',
            'Row, Col': './grid'
          }
        }
      }
    })
  ]
};
