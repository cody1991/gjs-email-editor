import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const config = {
  plugins: [react()],
  publicPath: process.env.NODE_ENV === 'production' ? '/gjs-email-editor/' : '/',
}

if (process.env.BUILDTYPE === 'lib') {
  config.build = {
    lib: {
      entry: resolve(__dirname, "src/mjml-editor/index.ts"),
      name: "gjs-email-editor",
      fileName: (format) => `gjs-email-editor.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "grapesjs", "juice", "file-saver", "mjml-browser"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    outDir: "lib",
  }
}

// https://vitejs.dev/config/
export default defineConfig(config)
