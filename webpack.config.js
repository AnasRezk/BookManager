const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: ["./src/index.js"],
    mode: isProduction ? "production" : "development",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    plugins: [
      new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: "./",
      port: 5555,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    }
  };
};
