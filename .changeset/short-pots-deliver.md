---
"@detra-lab/eslint-config": major
---

### Requirements

- Raised the minimum required version of **ESLint** to `v8.56`.
- Raised the minimum required version of **Node.js** to `v18.18`.

### Added ESLint Rules

- Added `@typescript-eslint/no-array-delete` rule [(more details)](https://typescript-eslint.io/rules/no-array-delete).
- Added `@typescript-eslint/prefer-promise-reject-errors` rule [(more details)](https://typescript-eslint.io/rules/prefer-promise-reject-errors).

### Removed ESLint Rules

- Removed the deprecated `no-new-object` rule. It has been replaced by the `no-object-constructor` rule [(more details)](https://eslint.org/docs/latest/rules/no-object-constructor).

### Updated Dependencies

- Updated `@typescript-eslint/eslint-plugin` to `v7.0.1`.
- Updated `@typescript-eslint/parser` to `v7.0.1`.
- Updated `eslint-plugin-jsdoc` to `v48.1.0`.
