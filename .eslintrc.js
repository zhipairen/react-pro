module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
          "jsx": true
      }
    },
    extends: ['eslint:recommended', 'react'],
    plugins: ['standard', 'react'],
    rules: {
      'indent': [1, 2],
      'quotes': [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      'jsx-quotes': [2, 'prefer-double'],
      'padded-blocks': ['warn'],
      'no-console': ['off'],
      'no-restricted-syntax': 0,
      'no-useless-escape': 0,
      'import/no-absolute-path': 0,
      'no-useless-constructor': 0,
      'import/no-extraneous-dependencies': 0,
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
        },
      ],
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-dynamic-require': 0,
      'no-plusplus': 0,
      'no-return-assign': 0,
      'no-var': 0,
      'no-tabs': 0,
      'no-unused-vars': 1,
      'no-mixed-operators': 1,
      'radix': 1,
      'no-script-url': 0,
      'no-await-in-loop': 0,
      'consistent-this': 0,
      'max-len': 0,
      'array-callback-return': 0,
      'comma-dangle': ['error', 'always-multiline'],
      'import/first': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': 0,
      'class-methods-use-this': 0,
      'prefer-reflect': 0,
      'operator-linebreak': 0,
      'react/jsx-uses-react': 1,
      'react/jsx-uses-vars': 1,
      'react/prop-types': 0,
      'max-params': [0, 20],
      'max-nested-callbacks': [0, 5],
    },
  };
  