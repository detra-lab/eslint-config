import { STATUS } from './constants'

const JAVASCRIPT_RULES = {
  // --- Recommended
  'accessor-pairs': [
    STATUS.Error,
    { setWithoutGet: true, getWithoutSet: false }
  ],
  'array-callback-return': STATUS.Error,
  'constructor-super': STATUS.Error,
  'default-case-last': STATUS.Error,
  'dot-notation': STATUS.Error,
  'for-direction': STATUS.Error,
  'func-name-matching': [
    STATUS.Error,
    'always',
    { includeCommonJSModuleExports: false }
  ],
  'getter-return': STATUS.Error,
  'grouped-accessor-pairs': STATUS.Error,
  'guard-for-in': STATUS.Error,
  'id-match': STATUS.Error,
  'max-depth': [STATUS.Error, 5],
  'max-nested-callbacks': [STATUS.Error, 3],
  'max-params': [STATUS.Error, 3],
  'new-cap': [
    STATUS.Error,
    { newIsCap: true, capIsNew: false, properties: true }
  ],
  'no-array-constructor': STATUS.Error,
  'no-async-promise-executor': STATUS.Error,
  'no-bitwise': STATUS.Error,
  'no-caller': STATUS.Error,
  'no-case-declarations': STATUS.Error,
  'no-class-assign': STATUS.Error,
  'no-compare-neg-zero': STATUS.Error,
  'no-cond-assign': STATUS.Error,
  'no-console': STATUS.Error,
  'no-const-assign': STATUS.Error,
  'no-constant-binary-expression': STATUS.Error,
  'no-constant-condition': STATUS.Error,
  'no-constructor-return': STATUS.Error,
  'no-control-regex': STATUS.Error,
  'no-debugger': STATUS.Error,
  'no-delete-var': STATUS.Error,
  'no-dupe-args': STATUS.Error,
  'no-dupe-class-members': STATUS.Error,
  'no-dupe-else-if': STATUS.Error,
  'no-dupe-keys': STATUS.Error,
  'no-duplicate-case': STATUS.Error,
  'no-duplicate-imports': STATUS.Error,
  'no-empty': STATUS.Error,
  'no-empty-character-class': STATUS.Error,
  'no-empty-function': STATUS.Error,
  'no-empty-pattern': STATUS.Error,
  'no-empty-static-block': STATUS.Error,
  'no-eq-null': STATUS.Error,
  'no-eval': STATUS.Error,
  'no-ex-assign': STATUS.Error,
  'no-extend-native': STATUS.Error,
  'no-extra-bind': STATUS.Error,
  'no-extra-boolean-cast': STATUS.Error,
  'no-extra-semi': STATUS.Warn,
  'no-fallthrough': STATUS.Error,
  'no-floating-decimal': STATUS.Error,
  'no-func-assign': STATUS.Error,
  'no-global-assign': STATUS.Error,
  'no-implicit-coercion': [STATUS.Error, { allow: ['!!'] }],
  'no-implicit-globals': STATUS.Error,
  'no-implied-eval': STATUS.Error,
  'no-import-assign': STATUS.Error,
  'no-inner-declarations': [STATUS.Error, 'both'],
  'no-invalid-regexp': STATUS.Error,
  'no-invalid-this': STATUS.Warn,
  'no-irregular-whitespace': STATUS.None,
  'no-iterator': STATUS.Error,
  'no-labels': STATUS.Error,
  'no-lone-blocks': STATUS.Error,
  'no-loss-of-precision': STATUS.Error,
  'no-misleading-character-class': STATUS.Error,
  'no-mixed-operators': STATUS.None,
  'no-mixed-spaces-and-tabs': STATUS.Error,
  'no-multi-assign': STATUS.None,
  'no-multi-str': STATUS.Error,
  'no-negated-condition': STATUS.None,
  'no-nested-ternary': STATUS.Error,
  'no-new-func': STATUS.Error,
  'no-new-object': STATUS.Error,
  'no-new-symbol': STATUS.Error,
  'no-new-wrappers': STATUS.Error,
  'no-new': STATUS.Error,
  'no-nonoctal-decimal-escape': STATUS.Error,
  'no-obj-calls': STATUS.Error,
  'no-octal': STATUS.Error,
  'no-param-reassign': STATUS.Error,
  'no-promise-executor-return': STATUS.Error,
  'no-proto': STATUS.Error,
  'no-prototype-builtins': STATUS.Error,
  'no-redeclare': STATUS.Error,
  'no-regex-spaces': STATUS.Error,
  'no-restricted-exports': [
    STATUS.Warn,
    { restrictDefaultExports: { direct: true } }
  ],
  'no-return-assign': [STATUS.Error, 'always'],
  'no-script-url': STATUS.Error,
  'no-self-assign': STATUS.Error,
  'no-self-compare': STATUS.Error,
  'no-sequences': STATUS.Error,
  'no-setter-return': STATUS.Error,
  'no-shadow-restricted-names': STATUS.Error,
  'no-shadow': [STATUS.Warn, { hoist: 'all' }],
  'no-sparse-arrays': STATUS.Error,
  'no-template-curly-in-string': STATUS.Error,
  'no-this-before-super': STATUS.Error,
  'no-throw-literal': STATUS.Error,
  'no-undef-init': STATUS.Error,
  'no-undef': STATUS.Error,
  'no-undefined': STATUS.None,
  'no-underscore-dangle': STATUS.Error,
  'no-unexpected-multiline': STATUS.Error,
  'no-unmodified-loop-condition': STATUS.Error,
  'no-unneeded-ternary': STATUS.None,
  'no-unreachable-loop': STATUS.Error,
  'no-unreachable': STATUS.Error,
  'no-unsafe-finally': STATUS.Error,
  'no-unsafe-negation': STATUS.Error,
  'no-unsafe-optional-chaining': STATUS.Error,
  'no-unused-expressions': [
    STATUS.Warn,
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
  ],
  'no-unused-labels': STATUS.Error,
  'no-unused-private-class-members': STATUS.Error,
  'no-unused-vars': [
    STATUS.Error,
    {
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_'
    }
  ],
  'no-use-before-define': STATUS.None,
  'no-useless-backreference': STATUS.Error,
  'no-useless-call': STATUS.Error,
  'no-useless-catch': STATUS.Error,
  'no-useless-computed-key': STATUS.Error,
  'no-useless-concat': STATUS.Error,
  'no-useless-constructor': STATUS.Error,
  'no-useless-escape': STATUS.Error,
  'no-useless-rename': STATUS.Error,
  'no-useless-return': STATUS.None,
  'no-var': STATUS.Error,
  'no-void': STATUS.Error,
  'no-with': STATUS.Error,
  'object-shorthand': STATUS.Error,
  'one-var': [STATUS.Error, 'never'],
  'prefer-arrow-callback': STATUS.Warn,
  'prefer-const': STATUS.Warn,
  'prefer-destructuring': STATUS.Warn,
  'prefer-object-has-own': STATUS.Warn,
  'prefer-object-spread': STATUS.Warn,
  'prefer-promise-reject-errors': STATUS.Warn,
  'prefer-regex-literals': STATUS.Warn,
  'prefer-rest-params': STATUS.Warn,
  'prefer-spread': STATUS.Warn,
  'prefer-template': STATUS.Warn,
  'require-await': STATUS.Error,
  'require-yield': STATUS.Error,
  'spaced-comment': [
    STATUS.Error,
    'always',
    { markers: ['/'], block: { exceptions: ['*'], balanced: true } }
  ],
  'symbol-description': STATUS.Error,
  'use-isnan': STATUS.Error,
  'valid-typeof': STATUS.Error,
  'vars-on-top': STATUS.Error,
  camelcase: [STATUS.Error, { properties: 'never' }],
  complexity: [STATUS.Error, { max: 20 }],
  curly: STATUS.Error,
  eqeqeq: [STATUS.Error, 'always'],
  radix: STATUS.Error,
  strict: [STATUS.Error, 'never'],
  yoda: [STATUS.Error, 'never', { onlyEquality: true }],

  // --- Import
  'import/no-deprecated': STATUS.Error,
  'import/order': [
    STATUS.Error,
    {
      groups: ['builtin', 'external', 'parent', ['sibling', 'index']],
      pathGroups: [
        {
          pattern: './*.css',
          group: 'index',
          position: 'after'
        },
        {
          pattern: './*.html',
          group: 'index',
          position: 'after'
        }
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc'
      }
    }
  ],

  // --- Node
  'node/global-require': STATUS.Error,
  'node/no-unsupported-features/es-syntax': STATUS.None,

  // --- JSDoc
  'jsdoc/check-access': STATUS.Warn,
  'jsdoc/check-alignment': STATUS.Warn,
  'jsdoc/check-examples': STATUS.None,
  'jsdoc/check-indentation': STATUS.None,
  'jsdoc/check-line-alignment': STATUS.None,
  'jsdoc/check-param-names': STATUS.Warn,
  'jsdoc/check-property-names': STATUS.Warn,
  'jsdoc/check-syntax': STATUS.None,
  'jsdoc/check-tag-names': [STATUS.Warn, { definedTags: ['jest-environment'] }],
  'jsdoc/check-types': STATUS.Warn,
  'jsdoc/check-values': STATUS.Warn,
  'jsdoc/empty-tags': STATUS.Warn,
  'jsdoc/implements-on-classes': STATUS.Warn,
  'jsdoc/informative-docs': STATUS.None,
  'jsdoc/match-description': STATUS.None,
  'jsdoc/multiline-blocks': STATUS.Warn,
  'jsdoc/no-bad-blocks': STATUS.None,
  'jsdoc/no-blank-block-descriptions': STATUS.None,
  'jsdoc/no-defaults': STATUS.None,
  'jsdoc/no-missing-syntax': STATUS.None,
  'jsdoc/no-multi-asterisks': STATUS.Warn,
  'jsdoc/no-restricted-syntax': STATUS.None,
  'jsdoc/no-types': STATUS.None,
  'jsdoc/no-undefined-types': STATUS.Warn,
  'jsdoc/require-asterisk-prefix': STATUS.None,
  'jsdoc/require-description': STATUS.None,
  'jsdoc/require-description-complete-sentence': STATUS.None,
  'jsdoc/require-example': STATUS.None,
  'jsdoc/require-file-overview': STATUS.None,
  'jsdoc/require-hyphen-before-param-description': STATUS.None,
  'jsdoc/require-jsdoc': STATUS.None,
  'jsdoc/require-param': STATUS.None,
  'jsdoc/require-param-description': STATUS.None,
  'jsdoc/require-param-name': STATUS.None,
  'jsdoc/require-param-type': STATUS.None,
  'jsdoc/require-property': STATUS.Warn,
  'jsdoc/require-property-description': STATUS.Warn,
  'jsdoc/require-property-name': STATUS.Warn,
  'jsdoc/require-property-type': STATUS.Warn,
  'jsdoc/require-returns': STATUS.None,
  'jsdoc/require-returns-check': STATUS.None,
  'jsdoc/require-returns-description': STATUS.None,
  'jsdoc/require-returns-type': STATUS.None,
  'jsdoc/require-throws': STATUS.None,
  'jsdoc/require-yields': STATUS.Warn,
  'jsdoc/require-yields-check': STATUS.Warn,
  'jsdoc/sort-tags': STATUS.None,
  'jsdoc/tag-lines': STATUS.Warn,
  'jsdoc/valid-types': STATUS.Warn
}

export = {
  env: {
    es2020: true,
    browser: true,
    jest: true,
    node: true
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    }
  },

  plugins: ['import', 'jsdoc', 'node'],

  rules: JAVASCRIPT_RULES
}
