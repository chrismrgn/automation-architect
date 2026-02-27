import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.ts', 'tests/unit/**/*.test.tsx', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      include: ['src/**'],
      thresholds: { branches: 50, lines: 50 },  // realistic for a marketing site with mostly static pages
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
