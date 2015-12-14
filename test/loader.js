var path = require('path');
var webpack = require('webpack');

var loader = path.resolve(__dirname, '../');

webpack({
  entry: './test/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.example$/, exclude: /node_modules/, loader: loader}
    ]
  }
}, function(err, stats) {
  if(err) throw err;
  // console.log(stats);
});
