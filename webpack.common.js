const path = require("path");
const Dotenv = require("dotenv-webpack");
const { resolveTsAliases } = require("resolve-ts-aliases");

module.exports = {
  plugins: [new Dotenv()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: resolveTsAliases(path.resolve("tsconfig.json")),
  },
};
