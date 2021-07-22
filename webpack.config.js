const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    completer: path.resolve(__dirname, "src/index.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.types.json",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/umd"),
    library: "Completer",
    libraryTarget: "umd",
    globalObject: "this",
    clean: true,
  },
};
