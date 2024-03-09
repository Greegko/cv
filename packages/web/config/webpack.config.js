module.exports = {
  mode: "production",
  entry: ["./src/main.tsx"],

  output: {
    filename: "bundle.js",
    path: __dirname + "/../src/public",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["solid"],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
};
