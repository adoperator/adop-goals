const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: "production",
  output: {
    filename: "tracker.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["minify"],
              [
                "@babel/preset-env",
                {
                  targets: ["defaults", "dead", "ie 6-8"],
                },
              ],
            ],
          },
        },
      },
    ],
  },
}
