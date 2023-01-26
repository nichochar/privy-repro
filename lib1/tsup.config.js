import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    external: ['react', 'wagmi', 'ethers'],
    entryPoints: ['src/index.ts'],
    format: ['cjs', 'esm'],
});
