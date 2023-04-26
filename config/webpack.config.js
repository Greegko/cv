module.exports = {
  mode: "production",
  entry: ["./src/main.tsx"],

  output: {
    filename: "bundle.js",
    path: __dirname + "/../public",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        resourceQuery: /\?inline$/,
        type: "asset/inline",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
    ],
  },
};
