'use strict';

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    root: true,
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        // "plugin:jsx-a11y/recommended",
        'plugin:flowtype/recommended'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        node: true,
        commonjs: true,
        es6: true
    },
    plugins: [
        'react',
        'import',
        'jsx-a11y',
        'flowtype'
    ],
    rules: {
        strict: [2, 'safe'],
        'no-await-in-loop': 2,
        'no-compare-neg-zero': 2,
        'no-debugger': isProduction ? 2 : 1,
        'no-cond-assign': [2, 'always'],
        'no-console': 0,
        'no-undef': isProduction ? 2 : 1,
        'no-class-assign': 0,
        'no-template-curly-in-string': 2,
        'valid-typeof': [2, { requireStringLiterals: true }],
        'no-extra-parens': [2, 'all', {
            conditionalAssign: false,
            returnAssign: false,
            nestedBinaryExpressions: false,
            ignoreJSX: 'all'

        }],
        'valid-jsdoc': [2, {
            prefer: {
                'return': 'return',
                arg: 'param',
                argument: 'param',
                'class': 'class',
                virtual: 'abstract'
            },
            preferType: {
                'boolean': 'Boolean',
                number: 'Number',
                string: 'String',
                error: 'Error',
                array: 'Array',
                object: 'Object',
                regex: 'RegExp',
                RegEx: 'RegExp',
                regEx: 'RegExp',
                regexp: 'RegExp',
                'function': 'Function',
                date: 'Date',
                Null: 'null',
                NULL: 'null',
                symbol: 'Symbol',
                Undefined: 'undefined'
            },
            requireReturn: false,
            requireReturnType: true,
            requireParamDescription: false,
            requireReturnDescription: false
        }],


        'block-scoped-var': 2,
        complexity: [2, 40],
        curly: [2, 'all'],
        eqeqeq: [2, 'always'],
        'guard-for-in': 2,
        'no-alert': isProduction ? 2 : 1,
        'no-empty-function': isProduction ? 2 : 1,
        'no-eval': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': isProduction ? 2 : 1,
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-labels': 2,
        'no-global-assign': 2,
        'no-eq-null': 2,
        'no-floating-decimal': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-else-return': 2,
        'no-extra-label': 2,
        'no-caller': 2,
        'no-fallthrough': 2,
        'dot-notation': [2, { allowKeywords: true, allowPattern: '(([A-Z]{1}[a-z]+)|([a-z]+(_[a-z]+)+))' }],
        'dot-location': [2, 'property'],
        'no-proto': 2,
        'no-redeclare': [2, { builtinGlobals: true }],
        'no-return-assign': [2, 'always'],
        'no-with': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'prefer-promise-reject-errors': [2, { allowEmptyReject: false }],
        radix: [2, 'always'],
        'require-await': 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
        yoda: 2,
        'no-unused-vars': isProduction ? 2 : 1,
        'no-unused-expressions': [2, {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
        }],
        'no-useless-call': 2,
        'no-void': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-return-await': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'array-callback-return': 2,
        'default-case': 2,
        'no-param-reassign': 2,
        'consistent-return': 1,
        'accessor-pairs': 1,
        'no-unmodified-loop-condition': 1,
        'no-use-before-define': 2,
        'no-undefined': 2,
        'no-undef-init': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': [0, {
            builtinGlobals: true,
            allow: ['done', 'err', 'error', 'result', 'results', 'cb', 'callback', 'resolve', 'reject', 'res', 'response', 'req', 'request', 'next', 'event', 'evt', 'e']
        }],
        'global-require': 0,
        'handle-callback-err': [2, '^.*(e|E)rr'],
        'no-mixed-requires': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,
        'no-sync': 0,
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        camelcase: 2,
        'comma-dangle': [isProduction ? 2 : 1, 'never'],
        'comma-spacing': [isProduction ? 2 : 1, { before: false, after: true }],
        'comma-style': [isProduction ? 2 : 1, 'last'],
        indent: [isProduction ? 2 : 1, 4, {
            SwitchCase: 1,
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
            MemberExpression: 1,
            ignoredNodes: ['JSXAttribute', 'JSXSpreadAttribute']
        }],
        'jsx-quotes': [2, 'prefer-double'],
        'max-len': [isProduction ? 2 : 1, 100, {
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreStrings: true
        }],
        'max-lines': [isProduction ? 2 : 1, {
            max: 400,
            skipBlankLines: true,
            skipComments: true
        }],
        'linebreak-style': [2, 'unix'],
        'max-depth': [isProduction ? 2 : 1, 8],
        'no-continue': 2,
        'max-statements-per-line': [isProduction ? 2 : 1, { max: 1 }],
        'new-cap': [2, {
            capIsNewExceptions: ['Loadable']
        }],
        'new-parens': 2,
        'max-nested-callbacks': [2, 5],
        'max-params': [2, 6],
        'max-statements': [isProduction ? 2 : 1, 50],
        'no-array-constructor': 2,
        'eol-last': 2,
        'no-multi-assign': 2,
        'no-mixed-operators': 2,
        'no-lonely-if': 2,
        'keyword-spacing': [2, {
            before: true,
            after: true,
            overrides: {
                'if': { after: false },
                'for': { after: false },
                'while': { after: false }
            }
        }],
        'no-bitwise': 2,
        'func-call-spacing': [2, 'never'],
        'func-name-matching': 2,
        'key-spacing': 2,
        'line-comment-position': [2, 'above'],
        'lines-around-directive': 2,
        'newline-per-chained-call': [0, { ignoreChainWithDepth: 3 }],
        'computed-property-spacing': 2,
        'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
        'no-negated-condition': 1,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-restricted-syntax': [2, 'WithStatement', 'LabeledStatement'],
        semi: [isProduction ? 2 : 1, 'always'],
        'no-tabs': isProduction ? 2 : 1,
        'no-trailing-spaces': isProduction ? 2 : 1,
        'no-underscore-dangle': [2, { allowAfterThis: true }],
        'no-unneeded-ternary': [2, { defaultAssignment: false }],
        'no-whitespace-before-property': 2,
        'unicode-bom': 2,
        'template-tag-spacing': 2,
        quotes: [isProduction ? 2 : 1, 'single', { avoidEscape: true }],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed', {
            keywords: true,
            unnecessary: true,
            numbers: true
        }],
        'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
        'object-curly-spacing': [2, 'always'],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'always'],
        'operator-assignment': 2,
        'operator-linebreak': [2, 'after'],
        'semi-spacing': [isProduction ? 2 : 1, { before: false, after: true }],
        'space-before-blocks': [isProduction ? 2 : 1, 'always'],
        'space-in-parens': [isProduction ? 2 : 1, 'never'],
        'space-infix-ops': [isProduction ? 2 : 1, { int32Hint: true }],
        'space-unary-ops': [isProduction ? 2 : 1, { words: true, nonwords: false }],
        'spaced-comment': [2, 'always', {
            exceptions: ['-'], markers: ['!']
        }],
        'object-curly-newline': [0, {
            ObjectExpression: { minProperties: 3, multiline: true },
            ObjectPattern: { minProperties: 6, multiline: true }
        }],
        'space-before-function-paren': [isProduction ? 2 : 1, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'arrow-parens': [isProduction ? 2 : 1, 'as-needed'],
        'arrow-spacing': [isProduction ? 2 : 1, { before: true, after: true }],
        'generator-star-spacing': [2, { before: false, after: true }],
        'no-confusing-arrow': [2, { allowParens: true }],
        'no-duplicate-imports': 0,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [2, 'always', { avoidQuotes: true, avoidExplicitReturnArrows: true }],
        'prefer-const': [2, { destructuring: 'all', ignoreReadBeforeAssign: true }],
        'prefer-numeric-literals': 2,
        'prefer-destructuring': [2, { array: false, object: true }, { enforceForRenamedProperties: false }],
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'template-curly-spacing': [2, 'never'],
        'symbol-description': 2,
        'rest-spread-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after'],

        // react plugin rules - to be completed
        'react/jsx-indent': [isProduction ? 2 : 1, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'react/forbid-prop-types': 0,
        'react/jsx-indent-props': [isProduction ? 2 : 1, 0],
        'react/jsx-closing-bracket-location': [isProduction ? 2 : 1, 'after-props'],

        // jsx-a11y - to be completed

        // flow rules - to be completed
        'flowtype/space-after-type-colon': [isProduction ? 2 : 1, 'never', { allowLineBreak: false }],

        // import plugin rules - to be completed
        'import/no-duplicates': 2,
        'import/no-named-as-default': 0,
        'import/namespace': [isProduction ? 2 : 1, { allowComputed: true }],
        'import/order': [isProduction ? 2 : 1, {
            // 'newlines-between': 'always-and-inside-groups',
            'newlines-between': 'ignore',
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']]
        }]
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src']
            }
        }
    },
    overrides: [
        {
            files: ['**/*-test.js'],
            env: {
                jest: true,
                node: true
            }
        }
    ]
};
