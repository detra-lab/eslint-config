import { BANNED_TYPES, ORDERING, STATUS } from './constants'

const TYPESCRIPT_RULES = {
  // --- Overriding JavaScript Rules
  'constructor-super': STATUS.None,
  'getter-return': STATUS.None,
  'no-const-assign': STATUS.None,
  'no-dupe-args': STATUS.None,
  'no-dupe-class-members': STATUS.None,
  'no-dupe-keys': STATUS.None,
  'no-func-assign': STATUS.None,
  'no-import-assign': STATUS.None,
  'no-new-symbol': STATUS.None,
  'no-obj-calls': STATUS.None,
  'no-redeclare': STATUS.None,
  'no-setter-return': STATUS.None,
  'no-this-before-super': STATUS.None,
  'no-undef': STATUS.None,
  'no-unreachable': STATUS.None,
  'no-unsafe-negation': STATUS.None,
  'no-var': STATUS.Error,
  'prefer-const': STATUS.Error,
  'prefer-rest-params': STATUS.Error,
  'prefer-spread': STATUS.Error,

  // --- Strict Rules (Type-Checked)
  'no-array-constructor': STATUS.None,
  '@typescript-eslint/no-array-constructor': STATUS.Error,

  'no-implied-eval': STATUS.None,
  '@typescript-eslint/no-implied-eval': STATUS.Error,

  'no-loss-of-precision': STATUS.None,
  '@typescript-eslint/no-loss-of-precision': STATUS.Error,

  'no-throw-literal': STATUS.None,
  '@typescript-eslint/no-throw-literal': STATUS.Error,

  'no-unused-vars': STATUS.None,
  '@typescript-eslint/no-unused-vars': [
    STATUS.Error,
    {
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_'
    }
  ],
  'no-useless-constructor': STATUS.None,
  '@typescript-eslint/no-useless-constructor': STATUS.Error,

  'require-await': STATUS.None,
  '@typescript-eslint/require-await': STATUS.Error,

  '@typescript-eslint/await-thenable': STATUS.Error,
  '@typescript-eslint/ban-ts-comment': STATUS.Error,
  '@typescript-eslint/ban-types': [STATUS.Error, { types: BANNED_TYPES }],
  '@typescript-eslint/no-base-to-string': STATUS.Error,
  '@typescript-eslint/no-confusing-void-expression': STATUS.Error,
  '@typescript-eslint/no-duplicate-enum-values': STATUS.Error,
  '@typescript-eslint/no-duplicate-type-constituents': STATUS.Error,
  '@typescript-eslint/no-dynamic-delete': STATUS.Error,
  '@typescript-eslint/no-explicit-any': [
    STATUS.Error,
    {
      ignoreRestArgs: true
    }
  ],
  '@typescript-eslint/no-extra-non-null-assertion': STATUS.Error,
  '@typescript-eslint/no-extraneous-class': STATUS.Error,
  '@typescript-eslint/no-floating-promises': STATUS.Error,
  '@typescript-eslint/no-for-in-array': STATUS.Error,
  '@typescript-eslint/no-invalid-void-type': STATUS.Error,
  '@typescript-eslint/no-meaningless-void-operator': STATUS.Error,
  '@typescript-eslint/no-misused-new': STATUS.Error,
  '@typescript-eslint/no-misused-promises': STATUS.Error,
  '@typescript-eslint/no-mixed-enums': STATUS.Error,
  '@typescript-eslint/no-namespace': [
    STATUS.Error,
    { allowDeclarations: true, allowDefinitionFiles: true }
  ],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': STATUS.Error,
  '@typescript-eslint/no-non-null-asserted-optional-chain': STATUS.Error,
  '@typescript-eslint/no-non-null-assertion': STATUS.Error,
  '@typescript-eslint/no-redundant-type-constituents': STATUS.Error,
  '@typescript-eslint/no-this-alias': [
    STATUS.Error,
    { allowDestructuring: true }
  ],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': STATUS.Error,
  '@typescript-eslint/no-unnecessary-condition': STATUS.Error,
  '@typescript-eslint/no-unnecessary-type-arguments': STATUS.Error,
  '@typescript-eslint/no-unnecessary-type-assertion': STATUS.Error,
  '@typescript-eslint/no-unnecessary-type-constraint': STATUS.Error,
  '@typescript-eslint/no-unsafe-argument': STATUS.Error,
  '@typescript-eslint/no-unsafe-assignment': STATUS.Error,
  '@typescript-eslint/no-unsafe-call': STATUS.Error,
  '@typescript-eslint/no-unsafe-declaration-merging': STATUS.Error,
  '@typescript-eslint/no-unsafe-enum-comparison': STATUS.Error,
  '@typescript-eslint/no-unsafe-member-access': STATUS.Error,
  '@typescript-eslint/no-unsafe-return': STATUS.Error,
  '@typescript-eslint/no-var-requires': STATUS.Error,
  '@typescript-eslint/prefer-as-const': STATUS.Warn,
  '@typescript-eslint/prefer-includes': STATUS.Warn,
  '@typescript-eslint/prefer-literal-enum-member': STATUS.Warn,
  '@typescript-eslint/prefer-reduce-type-parameter': STATUS.Warn,
  '@typescript-eslint/prefer-return-this-type': STATUS.Warn,
  '@typescript-eslint/prefer-ts-expect-error': STATUS.Warn,
  '@typescript-eslint/restrict-plus-operands': STATUS.Error,
  '@typescript-eslint/restrict-template-expressions': STATUS.Error,
  '@typescript-eslint/triple-slash-reference': [
    STATUS.Error,
    { path: 'never', types: 'always', lib: 'always' }
  ],
  '@typescript-eslint/unbound-method': STATUS.Error,
  '@typescript-eslint/unified-signatures': STATUS.Error,

  // --- Stylistic Rules (Type-Checked)
  'dot-notation': STATUS.None,
  '@typescript-eslint/dot-notation': STATUS.Error,

  'no-empty-function': STATUS.None,
  '@typescript-eslint/no-empty-function': STATUS.Error,

  '@typescript-eslint/adjacent-overload-signatures': STATUS.Error,
  '@typescript-eslint/array-type': [STATUS.Error, { default: 'array-simple' }],
  '@typescript-eslint/ban-tslint-comment': STATUS.Error,
  '@typescript-eslint/class-literal-property-style': [STATUS.Error, 'fields'],
  '@typescript-eslint/consistent-generic-constructors': STATUS.Error,
  '@typescript-eslint/consistent-indexed-object-style': STATUS.Error,
  '@typescript-eslint/consistent-type-assertions': [
    STATUS.Error,
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
  ],
  '@typescript-eslint/consistent-type-definitions': STATUS.Error,
  '@typescript-eslint/no-confusing-non-null-assertion': STATUS.Error,
  '@typescript-eslint/no-empty-interface': [
    STATUS.Error,
    { allowSingleExtends: true }
  ],
  '@typescript-eslint/no-inferrable-types': [
    STATUS.Error,
    { ignoreParameters: true }
  ],
  '@typescript-eslint/non-nullable-type-assertion-style': STATUS.Error,
  '@typescript-eslint/prefer-for-of': STATUS.Warn,
  '@typescript-eslint/prefer-function-type': STATUS.Warn,
  '@typescript-eslint/prefer-namespace-keyword': STATUS.Warn,
  '@typescript-eslint/prefer-nullish-coalescing': STATUS.Warn,
  '@typescript-eslint/prefer-optional-chain': STATUS.Warn,
  '@typescript-eslint/prefer-string-starts-ends-with': STATUS.Warn,

  // --- Misc
  'no-extra-semi': STATUS.None,
  '@typescript-eslint/no-extra-semi': STATUS.Warn,

  'no-invalid-this': STATUS.None,
  '@typescript-eslint/no-invalid-this': STATUS.Warn,

  'no-shadow': STATUS.None,
  '@typescript-eslint/no-shadow': STATUS.Warn,

  'no-unused-expressions': STATUS.None,
  '@typescript-eslint/no-unused-expressions': [
    STATUS.Warn,
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
  ],

  'no-use-before-define': STATUS.None,
  '@typescript-eslint/no-use-before-define': STATUS.None,

  '@typescript-eslint/explicit-function-return-type': [
    STATUS.Warn,
    { allowExpressions: true }
  ],
  '@typescript-eslint/explicit-member-accessibility': STATUS.Warn,
  '@typescript-eslint/member-ordering': [STATUS.Warn, { default: ORDERING }],
  '@typescript-eslint/method-signature-style': STATUS.Warn,
  '@typescript-eslint/no-require-imports': STATUS.Warn,
  '@typescript-eslint/no-unnecessary-qualifier': STATUS.Warn,
  '@typescript-eslint/no-useless-empty-export': STATUS.Warn,
  '@typescript-eslint/typedef': [
    STATUS.Error,
    {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: true,
      variableDeclaration: false
    }
  ]
}

export = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.ctsx', '*.mts', '*.mtsx'],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      rules: TYPESCRIPT_RULES
    }
  ]
}
