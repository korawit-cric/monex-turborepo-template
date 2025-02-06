module.exports = {
  extends: [require.resolve('@repo/eslint-config/storybook.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
};