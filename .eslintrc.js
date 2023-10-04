module.exports = {
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: { browser: true, es2022: true },
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-var': 'error',
  },
}
