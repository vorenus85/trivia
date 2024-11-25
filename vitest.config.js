import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
        exclude: ['src/App.vue', 'src/main.js', '.eslintrc.cjs  '],
        thresholds: {
          // Thresholds for basic level
          statements: 50,
          functions: 60,
          branches: 40,
          lines: 50
        }
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
