module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "no-unused-vars": "off", // ["error", { argsIgnorePattern: "next" }],
    "no-console": "off",
    "arrow-body-style": "off",
    "no-undef": "off", // off for now while we are building out functionality
  },
};
