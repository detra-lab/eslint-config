module.exports = {
  extends: ['../typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.test.json']
  }
}
