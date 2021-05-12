module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        // The rules below are listed in the order they appear on the eslint
        // rules page. All rules are listed to make it easier to keep in sync
        // as new ESLint rules are added.
        // http://eslint.org/docs/rules/
        // rules that are recommended and/or uncommented are active

        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        // 'for-direction': 'off',
        // 'no-await-in-loop': 'off',
        // 'no-compare-neg-zero': 'error', // eslint:recommended
        // 'no-cond-assign': 'always', // eslint:recommended
        // 'no-console': 'error', // eslint:recommended
        // 'no-constant-condition': 'error', // eslint:recommended
        // 'no-control-regex': 'error', // eslint:recommended
        // 'no-debugger': 'error', // eslint:recommended
        // 'no-dupe-args': 'error', // eslint:recommended
        // 'no-dupe-keys': 'error', // eslint:recommended
        // 'no-duplicate-case': 'error', // eslint:recommended
        // 'no-empty': 'error', // eslint:recommended
        // 'no-empty-character-class': 'error', // eslint:recommended
        // 'no-ex-assign': 'error', // eslint:recommended
        // 'no-extra-boolean-cast': 'error', // eslint:recommended
        // 'no-extra-parens': 'off', // overwritten by @typescript-eslint
        // 'no-extra-semi': 'error', // eslint:recommended
        // 'no-func-assign': 'error', // eslint:recommended
        // 'no-inner-declarations': 'error', // eslint:recommended
        // 'no-invalid-regexp': 'error', // eslint:recommended
        // 'no-irregular-whitespace': 'error', // eslint:recommended
        // 'no-obj-calls': 'error', // eslint:recommended
        // 'no-prototype-builtins': 'off',
        // 'no-regex-spaces': 'error', // eslint:recommended
        // 'no-sparse-arrays': 'error', // eslint:recommended
        // 'no-template-curly-in-string': 'off',
        // 'no-unexpected-multiline': 'error', // eslint:recommended
        // 'no-unreachable': 'error', // eslint:recommended
        // 'no-unsafe-finally': 'error', // eslint:recommended
        // 'no-unsafe-negation': 'off',
        // 'use-isnan': 'error' // eslint:recommended
        // 'valid-typeof': 'error' // eslint:recommended


        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------

        // 'accessor-pairs': 'off',
        // 'array-callback-return': 'off',
        // 'block-scoped-var': 'off',
        // 'class-methods-use-this': 'off',
        // 'complexity': 'off',
        // 'consistent-return': 'off'
        // 'curly': 'error',
        // 'default-case': 'off',
        // 'dot-location': 'off',
        // 'dot-notation': 'off',
        // 'eqeqeq': 'off',
        // 'guard-for-in': 'error',
        // 'no-alert': 'off',
        // 'no-caller': 'error',
        // 'no-case-declarations': 'error', // eslint:recommended
        // 'no-div-regex': 'off',
        // 'no-else-return': 'off',
        // 'no-empty-function': 'off', // overwritten by @typescript-eslint
        // 'no-empty-pattern': 'error', // eslint:recommended
        // 'no-eq-null': 'off',
        // 'no-eval': 'off',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        // 'no-extra-label': 'off',
        // 'no-fallthrough': 'error', // eslint:recommended
        // 'no-floating-decimal': 'off',
        // 'no-global-assign': 'off',
        // 'no-implicit-coercion': 'off',
        // 'no-implicit-globals': 'off',
        // 'no-implied-eval': 'off',
        // 'no-invalid-this': 'error',
        // 'no-iterator': 'off',
        // 'no-labels': 'off',
        // 'no-lone-blocks': 'off',
        // 'no-loop-func': 'off',
        // 'no-magic-numbers': 'off', // overwritten by @typescript-eslint
        'no-multi-spaces': 'warn',
        'no-multi-str': 'error',
        // 'no-new': 'off',
        // 'no-new-func': 'off',
        'no-new-wrappers': 'error',
        // 'no-octal': 'error', // eslint:recommended
        // 'no-octal-escape': 'off',
        // 'no-param-reassign': 'off',
        // 'no-proto': 'off',
        // 'no-redeclare': 'error', // eslint:recommended
        // 'no-restricted-properties': 'off',
        // 'no-return-assign': 'off',
        // 'no-script-url': 'off',
        // 'no-self-assign': 'error', // eslint:recommended
        // 'no-self-compare': 'off',
        // 'no-sequences': 'off',
        // 'no-throw-literal': 'error', // eslint:recommended
        // 'no-unmodified-loop-condition': 'off',
        // 'no-unused-expressions': 'off', // overwritten by @typescript-eslint
        // 'no-unused-labels': 'error', // eslint:recommended
        // 'no-useless-call': 'off',
        // 'no-useless-concat': 'off',
        // 'no-useless-escape': 'off',
        // 'no-void': 'off',
        // 'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        // 'radix': 'off',
        // 'require-await': 'off', // overwritten by @typescript-eslint
        // 'vars-on-top': 'off',
        // 'wrap-iife': 'off',
        // 'yoda': 'off',

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        // 'strict': 'off',

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        // 'init-declarations': 'off',
        // 'no-catch-shadow': 'off',
        // 'no-delete-var': 'error', // eslint:recommended
        // 'no-label-var': 'off',
        // 'no-restricted-globals': 'off',
        // 'no-shadow': 'off',
        // 'no-shadow-restricted-names': 'off',
        // 'no-undef': 'error', // eslint:recommended
        // 'no-undef-init': 'off',
        // 'no-undefined': 'off',
        // 'no-unused-vars': ['error', { vars: 'local', args: 'none'}], // eslint:recommended - overwritten by @typescript-eslint,
        // 'no-use-before-define': 'off', // overwritten by @typescript-eslint

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        // 'callback-return': 'off',
        // 'global-require': 'off',
        // 'handle-callback-err': 'off',
        // 'no-buffer-constructor': 'off',
        // 'no-mixed-requires': 'off',
        // 'no-new-require': 'off',
        // 'no-path-concat': 'off',
        // 'no-process-env': 'off',
        // 'no-process-exit': 'off',
        // 'no-restricted-modules': 'off',
        // 'no-sync': 'off',

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        // 'array-bracket-newline': 'off', // eslint:recommended
        'array-bracket-spacing': ['error', 'never'],
        // 'array-element-newline': 'off', // eslint:recommended
        'block-spacing': ['error', 'always'],
        // 'brace-style': 'off', // overwritten by @typescript-eslint
        // 'camelcase': 'off', // overwritten by @typescript-eslint
        // 'capitalized-comments': 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        // 'consistent-this': 'off',
        'eol-last': 'error',
        // 'func-call-spacing': 'error', // overwritten by @typescript-eslint
        // 'func-name-matching': 'off',
        // 'func-names': 'off',
        // 'func-style': 'off',
        // 'function-call-argument-newline': ['error', 'never'],
        // 'function-paren-newline': ['error', 'never'],
        // 'id-blacklist': 'off',
        // 'id-length': 'off',
        // 'id-match': ["error", "^[a-z]+([A-Z][a-z]+)*$"],
        // 'indent': ["error", 4], // overwritten by @typescript-eslint
        // 'jsx-quotes': 'off',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        // 'line-comment-position': 'off',
        'linebreak-style': 'off',
        // 'lines-around-comment': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        // 'max-depth': 'off',
        // 'max-len': 'error',
        // 'max-lines': 'off',
        // 'max-nested-callbacks': 'off',
        // 'max-params': 'off',
        // 'max-statements': 'off',
        // 'max-statements-per-line': 'off',
        // 'multiline-ternary': 'off',
        // 'new-cap': 'error',
        // 'new-parens': 'off',
        // 'newline-per-chained-call': 'off',
        // 'no-array-constructor': 'error', // overwritten by @typescript-eslint
        // 'no-bitwise': 'off',
        // 'no-continue': 'off',
        // 'no-inline-comments': 'off',
        // 'no-lonely-if': 'off',
        // 'no-mixed-operators': 'off',
        // 'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
        // 'no-multi-assign': 'off',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        // 'no-negated-condition': 'off',
        // 'no-nested-ternary': 'off',
        'no-new-object': 'error',
        // 'no-plusplus': 'off',
        // 'no-restricted-syntax': 'off',
        'no-tabs': 'error',
        // 'no-ternary': 'off',
        'no-trailing-spaces': 'warn',
        // 'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        // 'nonblock-statement-body-position': 'off',
        // 'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        // 'object-property-newline': 'off',
        'one-var': ['error', {
            var: 'never',
            let: 'never',
            const: 'never'
        }],
        // 'one-var-declaration-per-line': 'off',
        // 'operator-assignment': 'off',
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        // 'padding-line-between-statements': 'off',
        // 'prefer-object-spread': 'off',
        'quote-props': ['error', 'consistent'],
        // 'quotes': 'off', // overwritten by @typescript-eslint
        // 'semi': 'off', // overwritten by @typescript-eslint
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        // 'sort-keys': 'off',
        // 'sort-vars': 'off',
        'space-before-blocks': 'error',
        // 'space-before-function-paren': 'off' // overwritten by @typescript-eslint
        // 'space-in-parens': 'off',
        // 'space-infix-ops': 'off',
        // 'space-unary-ops': 'off',
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': 'error',
        // 'template-tag-spacing': 'off',
        // 'unicode-bom': 'off',
        // 'wrap-regex': 'off',

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        // 'arrow-body-style': 'off',
        // 'always' is used.
        'arrow-parens': ['error', 'always'],
        // 'arrow-spacing': 'off',
        // 'constructor-super': 'error', // eslint:recommended
        'generator-star-spacing': ['error', 'after'],
        // 'no-class-assign': 'off',
        'no-confusing-arrow': 'error',
        // 'no-const-assign': 'error', // eslint:recommended
        // 'no-dupe-class-members': 'error', // eslint:recommended
        // 'no-duplicate-imports': 'error',
        // 'no-new-symbol': 'error', // eslint:recommended
        // 'no-restricted-imports': 'off',
        // 'no-this-before-super': 'error', // eslint:recommended
        // 'no-useless-computed-key': 'off',
        // 'no-useless-constructor': 'off', // overwritten by @typescript-eslint
        // 'no-useless-rename': 'off',
        'no-var': 'error',
        // 'object-shorthand': 'off',
        // 'prefer-arrow-callback': 'off',
        'prefer-const': ['error', { destructuring: 'all' }],
        // 'prefer-destructuring': 'off',
        // 'prefer-numeric-literals': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        // 'prefer-template': 'off',
        // 'require-yield': 'error', // eslint:recommended
        'rest-spread-spacing': 'error',
        // 'sort-imports': 'off',
        // 'symbol-description': 'off',
        // 'template-curly-spacing': 'off',
        'yield-star-spacing': ['error', 'after'],

        // Typescript
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        // -----------------------------------------------------------------------------------------
        // '@typescript-eslint/adjacent-overload-signatures': 'error', // recommended
        // @typescript-eslint/array-type': 'error',
        // '@typescript-eslint/await-thenable': 'error', // recommended
        // '@typescript-eslint/ban-ts-ignore': 'error', // recommended
        // '@typescript-eslint/ban-types': 'error', // recommended
        '@typescript-eslint/brace-style': ['error', 'allman'],
        // '@typescript-eslint/camelcase': 'error', // recommended
        // '@typescript-eslint/class-name-casing': 'error', // recommended
        '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as'}], // recommended
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }], // recommended
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        // '@typescript-eslint/generic-type-naming': 'error',
        '@typescript-eslint/indent': ['error', 4],
        // '@typescript-eslint/member-delimiter-style': 'error', // recommended
        // '@typescript-eslint/member-naming': ['warn', { 'private': '^_' }],
        // '@typescript-eslint/member-ordering': 'error',
        // '@typescript-eslint/no-array-constructor': 'error', // recommended
        // '@typescript-eslint/no-dynamic-delete': 'error',
        // '@typescript-eslint/no-empty-function': 'error', // recommended
        // '@typescript-eslint/no-empty-interface': 'error', // recommended
        // '@typescript-eslint/no-explicit-any': 'error', // recommended
        // '@typescript-eslint/no-extra-parens': 'error',
        // '@typescript-eslint/no-extraneous-class': 'error',
        // '@typescript-eslint/no-floating-promises': 'error',
        // '@typescript-eslint/no-for-in-array': 'error', // recommended
        // '@typescript-eslint/no-inferrable-types': 'error', // recommended
        // '@typescript-eslint/no-magic-numbers': 'error',
        // '@typescript-eslint/no-misused-new': 'error', // recommended
        // '@typescript-eslint/no-misused-promises': 'error', // recommended
        // '@typescript-eslint/no-namespace': 'error', // recommended
        // '@typescript-eslint/no-non-null-assertion': 'error', // recommended
        // '@typescript-eslint/no-parameter-properties': 'error',
        // '@typescript-eslint/no-require-imports': 'error',
        // '@typescript-eslint/no-this-alias': 'error', // recommended
        // '@typescript-eslint/no-type-alias': 'error',
        // '@typescript-eslint/no-unnecessary-condition': 'error',
        // '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        // '@typescript-eslint/no-unnecessary-type-assertion': 'error', // recommended
        // '@typescript-eslint/no-untyped-public-signature': 'error',
        // '@typescript-eslint/no-unused-expressions': 'error',
        // '@typescript-eslint/no-unused-vars': 'error', // recommended
        // '@typescript-eslint/no-use-before-define': 'error', // recommended
        // '@typescript-eslint/no-useless-constructor': 'error',
        // '@typescript-eslint/no-var-requires': 'error',
        // '@typescript-eslint/prefer-for-of': 'error',
        // '@typescript-eslint/prefer-function-type': 'error',
        // '@typescript-eslint/prefer-includes': 'error', // recommended
        // '@typescript-eslint/prefer-namespace-keyword': 'error', // recommended
        // '@typescript-eslint/prefer-readonly': 'error',
        // '@typescript-eslint/prefer-regexp-exec': 'error', // recommended
        // '@typescript-eslint/prefer-string-starts-ends-with': 'error', // recommended
        // '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        // '@typescript-eslint/require-array-sort-compare': 'error',
        // '@typescript-eslint/require-await': 'error', // recommended
        // '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/semi': 'error',
        'space-before-function-paren': ['error', {
            'asyncArrow': 'always',
            'anonymous': 'never',
            'named': 'never'
        }],
        // '@typescript-eslint/space-before-function-paren': 'error',
        // '@typescript-eslint/strict-boolean-expressions': 'error',
        // '@typescript-eslint/triple-slash-reference': 'error', // recommended
        // '@typescript-eslint/type-annotation-spacing': 'error', // recommended
        // '@typescript-eslint/typedef': 'error',
        // '@typescript-eslint/unbound-method': 'error', // recommended
        // '@typescript-eslint/unified-signatures': 'error'
    }
};
