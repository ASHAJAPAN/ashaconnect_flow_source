// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        electron({
            entry: 'electron/main.js', // ���C���v���Z�X�̃G���g���[�|�C���g
        })
    ],
    build: {
        rollupOptions: {
            // �A�v���P�[�V�����̃G���g���[�|�C���g���w��
            input: 'src/main.js'
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
