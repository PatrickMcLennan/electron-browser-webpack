const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = (_env, argv) => {
  const PROD = argv.mode.toString().toLowerCase() === `production`;
  return merge(common, {
    mode: PROD ? `production` : `development`,
    entry: PROD
      ? [path.resolve(__dirname, `www/index.ts`)]
      : [`react-hot-loader/patch`, path.resolve(__dirname, `www/index.ts`)],
    output: {
      filename: PROD ? `app.[contenthash].js` : `app.js`,
      path: path.resolve(__dirname, `www/dist`),
    },
    devtool: !PROD && `source-map`,
    devServer: {
      contentBase: path.resolve(__dirname, `www/dist`),
      historyApiFallback: true,
      hot: true,
      inline: true,
      open: true,
      port: 8080,
      stats: `minimal`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /(node_modules)/,
          loader: PROD
            ? [`babel-loader`]
            : [
                `react-hot-loader/webpack`,
                `babel-loader`,
                `stylelint-custom-processor-loader`,
              ],
        },
      ],
    },
    optimization: {
      minimize: PROD,
      minimizer: [
        new TerserPlugin({
          parallel: 4,
        }),
      ],
    },
    plugins: PROD
      ? [
          new HtmlWebpackPlugin({
            filename: `index.[contenthash].html`,
            template: path.resolve(__dirname, `template.html`),
            inject: PROD ? `head` : `body`,
          }),
          new CleanWebpackPlugin(),
          new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: `defer`,
          }),
        ]
      : [
          new HtmlWebpackPlugin({
            filename: `index.html`,
            template: path.resolve(__dirname, `template.html`),
            inject: PROD ? `head` : `body`,
          }),
        ],
  });
};
