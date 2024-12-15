import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import path for resolving aliases

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Define the '@' alias for src
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @use "@/styles/mixins.sass" as *
          @use "@/styles/vars.sass" as *
        `,
      },
    },
  },
});
