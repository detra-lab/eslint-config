import { STATUS } from './constants'

const FP_TS_RULES = {
  'fp-ts/no-module-imports': STATUS.None,
  'fp-ts/no-redundant-flow': STATUS.Error,
  'fp-ts/prefer-traverse': STATUS.Warn,
  'fp-ts/prefer-chain': STATUS.Warn,
  'fp-ts/prefer-bimap': STATUS.Warn
}

export = {
  extends: ['plugin:fp-ts/recommended'],

  rules: FP_TS_RULES
}
