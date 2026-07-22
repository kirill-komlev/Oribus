import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			src: '/src',
			app: '/src/app',
			pages: '/src/pages',
			components: '/src/components',
			configs: '/src/configs',
			contexts: '/src/contexts',
			hooks: '/src/hooks',
			layouts: '/src/layouts',
			libs: '/src/libs',
			shared: '/src/shared',
			stores: '/src/stores',
		},
	},
})
