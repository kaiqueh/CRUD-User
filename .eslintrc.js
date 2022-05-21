module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-const-assign': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'no-undef': 'off',
  },
};
