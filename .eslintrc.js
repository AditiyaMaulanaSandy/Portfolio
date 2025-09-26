module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    // Add custom rules here if needed
  },
};