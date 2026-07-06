/** @type {import('prettier').Config} */
export default {
  // Base style — matches the existing linter-applied formatting on src/App.tsx
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  arrowParens: "always",
  endOfLine: "lf",

  plugins: ["@ianvs/prettier-plugin-sort-imports"],

  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "^react$",
    "^react/(.*)$",
    "^react-dom(/.*)?$",
    "^react-router-dom(/.*)?$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "6.0.0",
};
