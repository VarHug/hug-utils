module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': [2, 'only-multiline']
  }
};
