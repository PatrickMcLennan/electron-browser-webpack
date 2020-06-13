/* eslint-disable */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript",
    // "airbnb-hooks",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
    // project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "better-styled-components"],
  rules: {
    "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
  },
};
