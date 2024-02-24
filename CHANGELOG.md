# Changelog

## 3.0.0

### Major Changes

- 61ca182:

  ### Requirements

  - Raised the minimum required version of **ESLint** to `v8.56`.
  - Raised the minimum required version of **Node.js** to `v18.18`.

  ### Added ESLint Rules

  - [TypeScript Config] Added `@typescript-eslint/no-array-delete` rule [(more details)](https://typescript-eslint.io/rules/no-array-delete).
  - [TypeScript Config] Added `@typescript-eslint/prefer-promise-reject-errors` rule [(more details)](https://typescript-eslint.io/rules/prefer-promise-reject-errors).

  ### Disabled ESLint Rules

  - [JavaScript Config] Removed the deprecated `no-new-object` rule. It has been replaced by the `no-object-constructor` rule [(more details)](https://eslint.org/docs/latest/rules/no-object-constructor).

  ### Updated Dependencies

  - Updated `@typescript-eslint/eslint-plugin` to `v7.0.1`.
  - Updated `@typescript-eslint/parser` to `v7.0.1`.
  - Updated `eslint-plugin-jsdoc` to `v48.1.0`.

## 2.2.0

### Minor Changes

- 1d05950: Remove the `react/jsx-runtime` plugin and all related rules such as `jsx-uses-react` and `react-in-jsx`.

## 2.1.0

### Minor Changes

- 74df60b: Added new rule `@typescript-eslint/no-useless-template-literals`.

## 2.0.1

### Patch Changes

- 141223f: Added changeset script in `package.json`.

## 2.0.0

### Major Changes

- 7c2589b: **Breaking Changes**

  This release introduces a significant breaking change as we have deprecated the [`fp-ts`](https://gcanti.github.io/fp-ts/) specific configuration.
  We've made this decision to provide a more general and maintainable ESLint configuration for a wider range of projects.

  **Migration Steps:**

  - If your project relied on the deprecated `fp-ts` configuration, you'll need to update your ESLint configuration files to remove any references to it.
  - For those who have used the `fp-ts` configuration and wish to replicate its behaviour, we recommend the following steps:
    1. Install the [`eslint-plugin-fp-ts`](https://github.com/buildo/eslint-plugin-fp-ts):
       ```sh
       npm install eslint-plugin-fp-ts --save-dev
       ```
    2. Modify your ESLint file (e.g. `.eslintrc.json`) to add the necessary rules from `eslint-plugin-fp-ts`. Here's a sample configuration that mirrors the behaviour of the deprecated configuration:
       ```json
       {
         "extends": [
           "@detra-lab/eslint-config",
           "@detra-lab/eslint-config/typescript",
           "plugin:fp-ts/recommended"
         ],
         "parserOptions": {
           "project": true
         },
         "rules": {
           "fp-ts/no-module-imports": "off",
           "fp-ts/no-redundant-flow": "error",
           "fp-ts/prefer-bimap": "warn",
           "fp-ts/prefer-chain": "warn",
           "fp-ts/prefer-traverse": "warn"
         }
       }
       ```

## 1.2.1

### Patch Changes

- ad52d05: Internal changes have been made to the release pipeline.

## 1.2.0

### Minor Changes

- c6842b5: Changed the behaviour of the `@typescript-eslint/no-redeclare` rule to favour `inline-type-imports` over `separate-type-imports`.

## 1.1.0

### Minor Changes

- 31db9bf: Use the `@typescript-eslint/no-redeclare` rule to ignore declaration merges between certain sets.

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
