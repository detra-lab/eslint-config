import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './src/index.ts',
    './src/javascript.ts',
    './src/react.ts',
    './src/typescript.ts'
  ],
  splitting: false,
  sourcemap: false,
  clean: true
})
