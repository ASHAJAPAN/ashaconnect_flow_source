// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
        //electron({
        //    entry: 'electron/main.js', // メインプロセスのエントリーポイント
        //})
    ],
    base: '/ashaconnect_flow/',
    build: {
        rollupOptions: {
            // アプリケーションのエントリーポイントを指定
            input: 'index.html'
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
