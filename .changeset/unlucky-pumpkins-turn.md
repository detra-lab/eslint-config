---
'@detra-lab/eslint-config': major
---

**Breaking Changes**

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
