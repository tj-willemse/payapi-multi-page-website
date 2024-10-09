import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Your main HTML file
        pricing: 'pricing.html', // Path to Venus page
        about: 'about.html', // Path to Earth page
        contact: 'contact.html', // Path to Mars page
      },
    },
  },
});
