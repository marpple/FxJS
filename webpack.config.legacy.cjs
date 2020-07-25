const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    mode: env.NODE_ENV || "development",
    devtool: "source-map",
    entry: "./entry.js",
    output: {
      library: "_",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "./dist"),
      filename: "fx.es5.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin()],
    },
  };
};
