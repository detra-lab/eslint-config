---
"@detra-lab/eslint-config": minor
---

### Updated ESLint Rules

- [JavaScript Config] The `curly` was updated as a Warn instead of an Error. Additionally, the `multi` and `consistent` options were passed [(more details)](https://eslint.org/docs/latest/rules/curly#consistent).

### Disabled ESLint Rules

- [React Config] Disabled `react/prop-types`.
- [React Config] Disabled `react/jsx-uses-react`, which is no longer needed with React >=v17.
- [React Config] Disabled `react/react-in-jsx-scope`, which is no longer needed with React >=v17.
