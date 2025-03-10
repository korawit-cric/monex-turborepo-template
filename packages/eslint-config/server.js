const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use server side
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "./index.js",
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  env: {
    node: true,
    es6: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: [".*.js", "node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    indent: [2, 2, { SwitchCase: 1 }], // Sync indent setting with `prettier`
    "import/no-default-export": "off",
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "eslint-comments/require-description": "off",
    "no-implicit-coercion": "off",
    "no-unused-vars": "off",
    "react/function-component-definition": "off",
  },
};
