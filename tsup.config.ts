import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: './src/javascript.ts',
    react: './src/react.ts',
    typescript: './src/typescript.ts'
  },
  clean: true,
  format: ['cjs'],
  sourcemap: false,
  splitting: false
})
