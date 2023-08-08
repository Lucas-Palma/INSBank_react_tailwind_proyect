import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Lucas-Palma.github.io/INSbank_react_tailwind_proyect/',
});
