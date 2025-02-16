import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const setPath = (dir: string) => {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "widgets": setPath("./src/widgets"),
      "shared": setPath("./src/shared"),
      "app": setPath("./src/app"),
      "pages": setPath("./src/pages"),
    }
  }
})