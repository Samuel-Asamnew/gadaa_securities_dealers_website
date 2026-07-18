import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// `base: '/'` assumes the site is deployed at the ROOT of your domain
// (e.g. https://yourdomain.com/), which is the most common cPanel setup
// (uploading the build into public_html/).
//
// If instead you are deploying into a SUBFOLDER (e.g.
// https://yourdomain.com/gadaa/), change this to base: '/gadaa/' before
// running `npm run build`, and update the RewriteBase in public/.htaccess
// to match (RewriteBase /gadaa/).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
