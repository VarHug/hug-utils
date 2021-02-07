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
    'comma-dangle': [2, 'only-multiline'],
    // style
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement *']
      }
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    'space-infix-ops': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    // best-practices
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ]
  }
};
