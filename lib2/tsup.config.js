import { defineConfig } from 'tsup';
import { getConfig } from './get-config';

export default defineConfig({
    ...getConfig({
        dev: process.env.DEV === 'true',
        dts: true,
        platform: 'browser',
        external: ['react', 'wagmi', 'ethers'],
        entry: ['src/index.ts', 'src/component.tsx'],
        esbuildOptions(options, context) {
            options.splitting = false;
        },
    }),
});
