const TerserPlugin = require("terser-webpack-plugin");
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
      filename: "fx.js",
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  };
};
