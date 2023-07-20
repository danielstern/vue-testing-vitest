import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// import { v8 } from 'vitest'
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: "v8"
    },
    includeSource: ['src/**/*.spec.js','src/services/concert-service.js'],
    // includeSource: ['src/**/*.{js,vue}'],
    benchmark:true
  }
})
