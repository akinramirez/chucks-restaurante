const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js'/*,
    main: './js/app.js'*/
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'development'
};