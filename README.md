# ESLint Config

[![NPM Version][npm_version_badge]][npm_badge_url]
[![NPM Downloads][npm_downloads_badge]][npm_badge_url]
[![CI Status][ci_badge]][ci_badge_url]

[ESLint](https://eslint.org) configuration for JavaScript, TypeScript, fp-ts and React. Modular and opinionated.

- [ESLint Config](#eslint-config)
  - [Why our configuration?](#why-our-configuration)
  - [How to install and use](#how-to-install-and-use)
  - [How to extend the configuration](#how-to-extend-the-configuration)
  - [Integration with IDEs/Editors](#integration-with-ideseditors)
  - [Thanks](#thanks)
  - [License](#license)

> The following ESLint configurations do not include code formatting rules, which are therefore delegated to [Prettier](https://prettier.io/). Please, use the [`@detra-lab/prettier`](https://github.com/detra-lab/prettier-config) to handle this type of need.

## Why our configuration?

- Designed to provide the latest updates from the ESLint ecosystem.
- Modular: it supports a variety of syntaxes beyond modern JavaScript, including TypeScript, fp-ts, and React.
- We do not include formatting rules, as Prettier manages these.
- We think you'll appreciate our rules for improving your code's quality.

## How to install and use

1. Install the correct dependencies:

   ```sh
   pnpm add -D @detra-lab/eslint-config eslint
   ```

2. Create a `.eslintrc.json` file in the root of your project. Extend it with the following configuration:

   ```jsonc
   {
     "root": true,
     "extends": "@detra-lab/eslint-config"
   }
   ```

   We have some pre-built configurations if you need to support multiple environments and syntaxes, such as TypeScript or React:

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
          // Change it to match your `tsconfig.json` location.
          // In a mono-repo, it might be `./packages/*/tsconfig.json`.
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
          // Change it to match your `tsconfig.json` location.
          // In a mono-repo, it might be `./packages/*/tsconfig.json`.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

    <details>
      <summary><strong>JavaScript + React</strong></summary>

      ```json
      {
        "root": true,
        "extends": ["@detra-lab/eslint-config", "@detra-lab/eslint-config/react"]
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
          // Change it to match your `tsconfig.json` location.
          // In a mono-repo, it might be `./packages/*/tsconfig.json`.
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
          // Change it to match your `tsconfig.json` location.
          // In a mono-repo, it might be `./packages/*/tsconfig.json`.
          "project": ["./tsconfig.json"]
        }
      }
      ```
    </details>

3. Use the ESLint CLI to check supported files. Drop this line into your `package.json`, under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ignore-path .gitignore"
     ]
   }
   ```

   In order to support more than one extension, you will need to modify the script so that it matches the correct files:

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

## How to extend the configuration

You can extend the configuration and override some rules. Add the `rules` property inside the `.eslintrc.json` file and then choose what to turn on or off.

```jsonc
{
  "extends": [
    "@detra-lab/eslint-config",
    "@detra-lab/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": ["./tsconfig.json"]
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

2. Add the following code to your `.vscode/settings.json`:
   ```jsonc
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   },
   "eslint.validate": ["javascript"] // Add the types of files you want to validate (e.g. "typescript", "javascriptreact", "typescriptreact"])
   ```
</details>

## Thanks

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## License

[Apache License 2.0](./LICENSE)

<!-- Badges -->

[ci_badge]: https://img.shields.io/github/actions/workflow/status/detra-lab/eslint-config/tests.yaml?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_version_badge]: https://img.shields.io/npm/v/@detra-lab/eslint-config?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_downloads_badge]: https://img.shields.io/npm/dm/@detra-lab/eslint-config?style=flat-square&colorA=6930C3&colorB=5390D9

<!-- Links -->

[ci_badge_url]: https://github.com/detra-lab/eslint-config/actions/workflows/tests.yaml
[npm_badge_url]: https://www.npmjs.com/package/@detra-lab/eslint-config
