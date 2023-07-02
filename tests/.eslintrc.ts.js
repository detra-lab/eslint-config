module.exports = {
  extends: ['../javascript', '../typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.test.json']
  }
}
