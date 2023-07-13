module.exports = {
  extends: ['../javascript', '../typescript'],
  parserOptions: {
    project: './tsconfig.test.json',
    tsconfigRootDir: __dirname
  }
}
