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
      // Only measure coverage on actual logic files — not UI components, pages, or generated code
      include: ['src/lib/**', 'src/components/roi-calculator.tsx'],
      exclude: [
        'src/app/**',
        'src/components/ui/**',
        'src/components/nav.tsx',
        'src/components/footer.tsx',
        'src/components/before-after.tsx',
        'src/components/contact-faq.tsx',
        'src/components/contact-form.tsx',
        'src/components/faq.tsx',
        'src/components/faq-schema.tsx',
      ],
      // Marketing site — UI components aren't unit-testable without a browser
      // Logic is tested via inline tests in tests/unit/; no line threshold needed
      thresholds: {},
    },
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
