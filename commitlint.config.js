module.exports = {
  extends: ['@commitlint/config-conventional'],
  // example commit name: feat(monex-root): add prettier, commit-lint, husky and pre-commit
  rules: {
    // Ensure commit type is one of the specified values
    'type-enum': [2, 'always', ['build', 'chore', 'docs', 'feature', 'feat', 'fix', 'refactor', 'test']],
    // Ensure scope is in kebab-case
    'scope-case': [2, 'always', ['kebab-case']],
    // Ensure scope is one of the specified values
    'scope-enum': [2, 'always', ['monex-root']],
    // Ensure scope is never empty
    'scope-empty': [2, 'never'],
  },
};