import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') },
      { find: "components", replacement: path.resolve(__dirname, 'src/components') },
      { find: "hooks", replacement: path.resolve(__dirname, 'src/hooks') },
      { find: "img", replacement: path.resolve(__dirname, 'src/assests/img') },
      { find: "icons", replacement: path.resolve(__dirname, 'src/assets/icons') },
      { find: "pages", replacement: path.resolve(__dirname, 'src/pages') },
    ]
  },
  base:"/pokemon-redux/"
})
