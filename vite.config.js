import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';
// https://vitejs.dev/config/
//process.env.PUBLIC_URL = '/sweet-words';
export default defineConfig({
  base: new URL(pkg.homepage).pathname,
  server: {
    port: 3010
  },
  esbuild: {
    drop: process.env.NODE_ENV == 'production' ? ['console', 'debugger'] : []
  },
  plugins: [react()]
});
