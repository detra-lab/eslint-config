# Changelog

## 1.0.2

### Patch Changes

- cff3257: The `main` and `types` fields have been removed from the `package.json`.

## 1.0.1

### Patch Changes

- 856ea03: Fixed the `exports` field in the `package.json` file.

## 1.0.0

### Major Changes

- 2d20003: We want to inform you about the latest updates to our code, which bring exciting new features and improvements.

  - We have introduced an important addition to our project by including the `@detra-lab/eslint-config/fp-ts` configuration. This new layer is tailored to provide rules for the [fp-ts](https://gcanti.github.io/fp-ts/) library, a powerful functional programming library for TypeScript.
  - We have updated both `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to version 6. This update brings significant improvements and changes to various rules related to TypeScript. We have considered these updates and made changes to our configuration accordingly. For more detailed information about the changes introduced in version 6, we recommend reading the [TypeScript ESLint blog](https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/).
  - We have decided to change our license from the MIT license to the Apache 2.0 license. This change provides greater flexibility and compatibility for our project and aligns with the terms of the Apache 2.0 license.

## 0.2.0

### Minor Changes

- 22bd9f1: New rule available in `@detra-lab/eslint-config`: [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports#options). This rule was configured to enforce the usage of named exports.

## 0.1.0

- This is the initial release!
