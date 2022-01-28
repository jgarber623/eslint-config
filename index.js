module.exports = {
  extends: 'eslint:recommended',

  rules: {
    // Enforces consistent use of trailing commas in object and array literals.
    'comma-dangle': ['error', 'never'],

    // Enforces a consistent indentation style.
    'indent': ['error', 2],

    // Enforces consistent line endings independent of operating system, VCS,
    // or editor used across your codebase.
    'linebreak-style': ['error', 'unix'],

    // Enforces the consistent use of either backticks, double, or single
    // quotes.
    'quotes': ['error', 'single'],

    // Enforces consistent use of semicolons.
    'semi': ['error', 'always']
  }
};
