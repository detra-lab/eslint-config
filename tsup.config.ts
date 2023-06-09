import { defineConfig } from 'tsup'

const ENTRIES = {
  index: './src/javascript.ts',
  react: './src/react.ts',
  typescript: './src/typescript.ts'
}

export default defineConfig({
  clean: false,
  dts: true,
  entry: ENTRIES,
  format: ['cjs'],
  outDir: '.',
  platform: 'node',
  sourcemap: false,
  splitting: false,
  target: 'node16'
})
