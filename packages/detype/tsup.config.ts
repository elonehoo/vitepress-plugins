import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/node/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
})
