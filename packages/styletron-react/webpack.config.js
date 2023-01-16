/* eslint-disable cup/no-undef */
// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => ({
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    libraryTarget: "system",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // add .tsx, .ts
  },
  plugins: [
    new webpack.DefinePlugin({
      __BROWSER__: true,
      __DEV__: argv.mode === "development" ? true : false,
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  externals: ['react', 'react-dom']
});
