// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "comma-dangle": 0,
    "semi": 0,
    "global-require": 0,
    "space-before-blocks": 0,
    "object-shorthand": 0,
    "no-plusplus": 0,
    "import/first": 0,
    "no-param-reassign": 0,
    "no-unused-vars": 0,
    "indent": 0,
    "arrow-body-style": 0,
    "func-names": 0,
    "no-underscore-dangle": 0,
    "no-trailing-spaces": 0,
    "prefer-const": 1,
    "prefer-template": 1,
    "eqeqeq": 1,
    "no-restricted-syntax": 0,
    "no-prototype-builtins": 0,
    "import/prefer-default-export": 1,
    "consistent-return": 0,
    "no-multiple-empty-lines": 0,
    "no-undef": 0,
    "max-len": 0,
    "padded-blocks": 1,
    "arrow-parens": 0,
    "no-use-before-define": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-mutable-exports": 0
  }
};
