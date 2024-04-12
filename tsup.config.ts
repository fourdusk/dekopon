import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/main.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true
})
