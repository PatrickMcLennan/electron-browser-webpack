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
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "better-styled-components"],
  rules: {
    "@typescript-eslint/quotes": "off", // Use whatever quotes you want
    "@typescript-eslint/no-inferrable-types": "off", // Inferrable types aren't bad
    "@typescript-eslint/indent": "off", // Prettier will handle my styles
    "comma-dangle": 0, // Trailing commas are useless
    "max-len": 0, // Prettier will handle my styles
    "import/prefer-default-export": "off", // I never use default exports in my .style.ts files
  },
};
