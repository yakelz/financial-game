import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	resolve: {
		alias: {
			'@scenes': path.resolve(__dirname, 'src/components/scenes'),
			'@assets': path.resolve(__dirname, 'src/components/assets'),
			'@ui': path.resolve(__dirname, 'src/components/ui'),
			'@core': path.resolve(__dirname, 'src/core/'),
		},
	},

	plugins: [
		svgr({
			svgrOptions: {
				ref: true,
			},
		}),
		react(),
		VitePWA({
			strategies: 'generateSW',
			manifest: {
				name: 'Сдед в сети',
				short_name: 'Financial-game',
				description: 'Обучающая веб-игра о личной финансовой безопасности',
				start_url: '/',
				display: 'standalone',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/fav/fav16.svg',
						sizes: '16x16',
						type: 'image/svg+xml',
					},
					{
						src: '/fav/logo192.png',
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: '/fav/logo512.png',
						type: 'image/png',
						sizes: '512x512',
					},
				],
			},
			workbox: {
				globPatterns: ['**/*.{html,webmanifest,js,svg,css,png,jpg,mp3,wav,woff,woff2,mp4}'], // Кэшируем все файлы с указанными расширениями
				maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // лимит до 10 МБ
				runtimeCaching: [
					{
						urlPattern: /.*\.(html|webmanifest|js|svg|css|png|jpg|mp3|wav|woff|woff2|mp4)$/,
						handler: 'CacheFirst',
						options: {
							cacheName: 'assets',
							expiration: {
								maxEntries: 500,
								maxAgeSeconds: 60 * 60 * 24, // 1 день хранить кэш
							},
						},
					},
				],
			},
		}),
	],
	server: {
		port: 8080,
	},
});
