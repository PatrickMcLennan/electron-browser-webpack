module.exports = {
  presets: [
    ["@babel/preset-env", { targets: ["last-2-versions", "not ie"] }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["babel-plugin-styled-components"],
};
