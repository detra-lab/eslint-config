# ESLint Config

[![NPM Version][npm_version_badge]][npm_badge_url]
[![NPM Downloads][npm_downloads_badge]][npm_badge_url]
[![CI Status][ci_badge]][ci_badge_url]

[ESLint](https://eslint.org) configurations for JavaScript, TypeScript, fp-ts and React. Modular and opinionated.

- [ESLint Config](#eslint-config)
  - [Why Use Our Configuration?](#why-use-our-configuration)
  - [Installation and Usage](#installation-and-usage)
  - [Extending the Configuration](#extending-the-configuration)
  - [Integration with IDEs/Editors](#integration-with-ideseditors)
  - [Acknowledgments](#acknowledgments)
  - [License](#license)

> Please note that this ESLint configuration does not include code formatting rules, as those are handled by [Prettier](https://prettier.io/). To handle code formatting, you can use [`@detra-lab/prettier`](https://github.com/detra-lab/prettier-config).

## Why Use Our Configuration?

- **Up-to-date**: Our configurations are designed to incorporate the latest updates from the ESLint ecosystem.
- **Modular**: We support a variety of syntaxes beyond modern JavaScript, including TypeScript, fp-ts, and React.
- **Separation of Concerns**: We focus on linting rules and do not include formatting rules, as those are better handled by Prettier.

## Installation and Usage

1. Install the required dependencies:

   ```sh
   pnpm add -D @detra-lab/eslint-config eslint
   ```

2. Create a `.eslintrc.json` file in the root of your project and extend it with our configuration:

   ```jsonc
   {
     "root": true,
     "extends": "@detra-lab/eslint-config"
   }
   ```

   If you need to support multiple environments and syntaxes, such as TypeScript or React, we provide pre-built configurations. You can extend them as shown below:

    <details>
      <summary><strong>JavaScript + React</strong></summary>

      ```json
      {
        "root": true,
        "extends": [
          "@detra-lab/eslint-config",
          "@detra-lab/eslint-config/react"
        ]
      }
      ```
    </details>

    <details>
      <summary><strong>TypeScript</strong></summary>

      ```jsonc
      {
        "root": true,
        "extends": [
          "@detra-lab/eslint-config",
          "@detra-lab/eslint-config/typescript"
        ],
        "parserOptions": {
          // Be sure to update the `project` value with the exact location of your `tsconfig.json` file.
          // For mono-repos, the location may be `./packages/*/tsconfig.json`.
          // Check https://typescript-eslint.io/packages/parser/#project for more guidance.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

    <details>
      <summary><strong>TypeScript + fp-ts</strong></summary>

      ```jsonc
      {
        "root": true,
        "extends": [
          "@detra-lab/eslint-config",
          "@detra-lab/eslint-config/typescript",
          "@detra-lab/eslint-config/fp-ts"
        ],
        "parserOptions": {
          // Be sure to update the `project` value with the exact location of your `tsconfig.json` file.
          // For mono-repos, the location may be `./packages/*/tsconfig.json`.
          // Check https://typescript-eslint.io/packages/parser/#project for more guidance.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

    <details>
      <summary><strong>TypeScript + React</strong></summary>

      ```jsonc
      {
        "root": true,
        "extends": [
          "@detra-lab/eslint-config",
          "@detra-lab/eslint-config/typescript"
          "@detra-lab/eslint-config/react"
        ],
        "parserOptions": {
          // Be sure to update the `project` value with the exact location of your `tsconfig.json` file.
          // For mono-repos, the location may be `./packages/*/tsconfig.json`.
          // Check https://typescript-eslint.io/packages/parser/#project for more guidance.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

    <details>
      <summary><strong>TypeScript + fp-ts + React</strong></summary>

      ```jsonc
      {
        "root": true,
        "extends": [
          "@detra-lab/eslint-config",
          "@detra-lab/eslint-config/typescript",
          "@detra-lab/eslint-config/fp-ts"
          "@detra-lab/eslint-config/react"
        ],
        "parserOptions": {
          // Be sure to update the `project` value with the exact location of your `tsconfig.json` file.
          // For mono-repos, the location may be `./packages/*/tsconfig.json`.
          // Check https://typescript-eslint.io/packages/parser/#project for more guidance.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

3. Use the ESLint CLI to check supported files. Add the following line to your `package.json` under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ignore-path .gitignore"
     ]
   }
   ```

   To support multiple file extensions, modify the script to match the correct files:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ext .js,.jsx,.ts,.tsx --ignore-path .gitignore"
     ]
   }
   ```

4. Lint your code with ESLint:

   ```sh
   pnpm run check:src
   ```

## Extending the Configuration

Extend and override specific rules by adding them to the `rules` property in the `.eslintrc.json` file.

```jsonc
{
  "extends": [
    "@detra-lab/eslint-config",
    "@detra-lab/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": true
  },
  "env": [
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  ],
  "globals": {
    // Your global variables (setting to `false` means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  "rules": {
    // Standard rules customisation
  }
}
```

## Integration with IDEs/Editors

<details>
<summary><strong>Visual Studio Code</strong></summary>

1. Install the [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

2. Add the following code to your `.vscode/settings.json` file:
   ```jsonc
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   },
   "eslint.validate": ["javascript"] // Add the types of files you want to validate (e.g. "typescript", "javascriptreact", "typescriptreact"])
   ```
</details>

## Acknowledgments

Thanks to the following projects for their contributions:

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-fp-ts](https://github.com/buildo/eslint-plugin-fp-ts)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

## License

[Apache License 2.0](./LICENSE)

<!-- Badges -->

[ci_badge]: https://img.shields.io/github/actions/workflow/status/detra-lab/eslint-config/test.yaml?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_version_badge]: https://img.shields.io/npm/v/@detra-lab/eslint-config?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_downloads_badge]: https://img.shields.io/npm/dm/@detra-lab/eslint-config?style=flat-square&colorA=6930C3&colorB=5390D9

<!-- Links -->

[ci_badge_url]: https://github.com/detra-lab/eslint-config/actions/workflows/test.yaml
[npm_badge_url]: https://www.npmjs.com/package/@detra-lab/eslint-config
