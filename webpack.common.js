const path = require("path");
const { resolveTsAliases } = require("resolve-ts-aliases");
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [new Dotenv()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: resolveTsAliases(path.resolve("tsconfig.json")),
  },
};
