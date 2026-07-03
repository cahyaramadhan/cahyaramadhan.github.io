import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' because this deploys to <username>.github.io (a root user site).
// If you ever switch to a project repo (username.github.io/repo-name), change
// this to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
