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
        resourceQuery: /\?source$/,
        type: "asset/source",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
