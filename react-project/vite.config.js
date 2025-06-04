import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',  // your main component file
      name: 'ReactProject',
      fileName: (format) => `react-project.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
