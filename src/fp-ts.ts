import { STATUS } from './constants'

const FP_TS_RULES = {
  'fp-ts/no-module-imports': STATUS.None,
  'fp-ts/no-redundant-flow': STATUS.Error,
  'fp-ts/prefer-traverse': STATUS.Error,
  'fp-ts/prefer-chain': STATUS.Error,
  'fp-ts/prefer-bimap': STATUS.Error
}

export = {
  extends: ['plugin:fp-ts/recommended'],

  rules: FP_TS_RULES
}
