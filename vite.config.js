import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginStyleInject from 'vite-plugin-style-inject';
import htmlConfig from 'vite-plugin-html-config';
import { resolve } from 'path'

const htmlPluginConfig = htmlConfig({
  headScripts: [
    {
      src: 'https://grapesjs.com/js/ckeditor/ckeditor.js',
    },
    'CKEDITOR.dtd.$editable.td = 1;',
  ],
});

const config = {
  plugins: [react(), VitePluginStyleInject()],
  base: process.env.NODE_ENV === 'production' ? '/gjs-email-editor/' : '/',
  plugins: [htmlPluginConfig]
}

if (process.env.BUILDTYPE === 'lib') {
  config.build = {
    lib: {
      entry: resolve(__dirname, "src/email-editor/index.ts"),
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
