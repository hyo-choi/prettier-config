https://www.npmjs.com/package/prettier-plugin-brace-style


/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  quoteProps: "as-needed",
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
};

module.exports = config;
