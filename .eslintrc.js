module.exports = {
  env: {
    es6: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [`src`]
      }
    }
  },
  extends: [`kentcdodds`, `plugin:react/recommended`, `prettier`],
  plugins: [`babel`, `import`, `react`, `prettier`],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    //General rules
    'arrow-parens': `off`,
    'object-curly-newline': `off`,
    'no-mixed-operators': `off`,
    'arrow-body-style': `off`,
    'function-paren-newline': `off`,
    'no-plusplus': 1,
    semi: [`error`, `never`],
    'max-lines-per-function': 0,
    'space-before-function-paren': 0,
    'max-len': [
      `error`,
      100,
      2,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-console': `warn`,
    'no-alert': `error`,
    'no-param-reassign': `off`,
    radix: 1,
    'prefer-destructuring': `off`,
    'prefer-const': [
      `error`,
      {
        destructuring: `all`,
        ignoreReadBeforeAssign: false
      }
    ],
    'no-useless-concat': `error`,
    'no-negated-condition': 0,
    quotes: [`error`, `backtick`],
    'no-shadow': 0,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [
      `error`,
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-irregular-whitespace': 2,
    camelcase: [
      2,
      {
        properties: `always`
      }
    ],
    'no-var': 2,
    'prefer-arrow-callback': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true
      }
    ],
    'babel/new-cap': 0,
    'prettier/prettier': [
      2,
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: `none`,
        semi: false,
        tabWidth: 2
      }
    ],
    //React rules
    'react/require-default-props': `off`,
    'react/forbid-prop-types': `off`,
    'react/no-did-mount-set-state': `off`,
    'react/no-unused-prop-types': `off`,
    'react/jsx-one-expression-per-line': `off`,
    'react/jsx-filename-extension': [1, { extensions: [`.js`, `.jsx`] }],
    'react/prop-types': 0,
    'react/destructuring-assignment': [1, `always`, { ignoreClassFields: true }],
    'react/no-array-index-key': 0,
    'react/display-name': 0,
    //Import rules
    'import/prefer-default-export': 0
  }
}
