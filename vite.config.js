import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: "v8"
    },
    includeSource: ['src/**/*.spec.js','src/services/concert-service.js'],
    benchmark:true
  }
})
