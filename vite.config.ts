import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [vue(), vueJsx(),
   
  ],
  resolve: {
    // extensions: ['.js', '.vue', '.json', 'scss', '.ts'],
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    hmr: true
  }
})
