const { ESLint } = require("eslint")

module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
  },
  ignorePatterns: ["node_modules/", ".next/", "out/"],
}
