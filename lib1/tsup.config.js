import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    platform: 'browser',
    external: ['react', 'wagmi', 'ethers'],
    entryPoints: ['src/index.ts'],
    format: ['esm'],
});
