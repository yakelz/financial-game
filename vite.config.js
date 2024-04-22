import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	resolve: {
		alias: {
			'@scenes': path.resolve(__dirname, 'src/components/scenes'),
			'@assets': path.resolve(__dirname, 'src/components/assets'),
			'@ui': path.resolve(__dirname, 'src/components/ui'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@core': path.resolve(__dirname, 'src/core/'),
		},
	},
	plugins: [svgr(), react()],
	server: {
		port: 8080,
	},
});
