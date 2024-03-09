const webpackConfig = require("./webpack.config.js");

module.exports = Object.assign(webpackConfig, {
  mode: "development",
  devtool: "cheap-source-map",

  devServer: {
    historyApiFallback: true,
  },

  optimization: {
    concatenateModules: true,
  },
});
