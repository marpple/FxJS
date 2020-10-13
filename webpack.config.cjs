const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const { NODE_ENV, BABEL_ENV } = process.env;

module.exports = () => {
  return {
    mode: NODE_ENV || "development",
    devtool: "source-map",
    entry: "./entry.js",
    output: {
      library: "_",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "./dist"),
      filename: BABEL_ENV === "modern" ? "fx.js" : "fx.es5.js",
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
      minimizer: [new TerserPlugin()],
    },
  };
};
