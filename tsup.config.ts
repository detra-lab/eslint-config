import { defineConfig } from 'tsup'

const ENTRIES = {
  javascript: './src/javascript.ts',
  typescript: './src/typescript.ts',
  react: './src/react.ts'
}

const OUT_DIR = './lib'

const config: ReturnType<typeof defineConfig> = {
  dts: true,
  clean: false,
  outDir: OUT_DIR,
  entry: ENTRIES,
  format: ['cjs', 'esm'],
  target: 'es2020',
  platform: 'node',
  sourcemap: false,
  splitting: false
}

export default defineConfig(config)
