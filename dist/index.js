/**
 * @type {import('prettier').Config}
 */
const config = {
  plugins: ["prettier-plugin-brace-style"],
  braceStyle: "1tbs",
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
