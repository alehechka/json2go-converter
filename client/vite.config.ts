import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: 'https://json2go-converter-4ipc5ijfwq-uc.a.run.app',
				// target: 'http://localhost:8080',
				changeOrigin: true,
			},
		},
	},
});
