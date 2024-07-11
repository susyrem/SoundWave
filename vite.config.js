
// https://vitejs.dev/guide/build.html#multi-page-app

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/about-us/aboutUs.html'),
        contact: resolve(__dirname, 'src/pages/contact/contact.html'),
        tos: resolve(__dirname, 'src/pages/tos/tos.html'),
        privacy: resolve(__dirname, 'src/pages/privacy/priv.html'),
      },
    },
  },
})