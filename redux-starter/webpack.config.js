const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development",
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      // loader: 'babel-loader',
      // options: {
        // presets: [ "@babel/preset-env"]
      // }
    }]
  }
};
