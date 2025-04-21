import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), dts({ insertTypesEntry: true })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		outDir: 'dist',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),

			name: 'ui-kit',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => `${entryName ? entryName + '/' : ''}ui-kit.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
