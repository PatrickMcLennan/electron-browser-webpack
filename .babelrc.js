module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: ["last 2 versions", "not IE >= 10"], useBuiltIns: `usage` },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        ssr: "false",
        displayName: "false",
        fileName: "false",
        minify: "true",
        pure: "true",
        transpileTemplateLiterals: "true",
      },
    ],
  ],
};
