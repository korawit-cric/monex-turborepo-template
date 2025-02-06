module.exports = {
  extends: ['@commitlint/config-conventional'],
  // example commit name: feat(monex-root): add prettier, commint-lint,  husky and pre-commit
  rules: {
    'type-enum': [2, 'always', ['build', 'chore', 'docs', 'feature', 'feat', 'fix', 'refactor', 'test']],
    'scope-case': [ 2, 'always', ['kebab-case']],
    'scope-enum': [2, 'always', ['monex-root']]
  },
};
