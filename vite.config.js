import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { config } from 'dotenv'
config()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: process.env.PORT,
        url: process.env.REACT_APP_API_URL
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src')
        }
    }
})
