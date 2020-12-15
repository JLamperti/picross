module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      "react",
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:prettier/recommended",
      "plugin:react/recommended"
    ],
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            "multiline": {
              "delimiter": "none",
              "requireLast": false
            },
            "singleline": {
              "delimiter": "comma",
              "requireLast": false
            }
        }]
    },
    env: {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
    }
  };
