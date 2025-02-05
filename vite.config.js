import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Import path for resolving aliases
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
    }),
  ],
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
