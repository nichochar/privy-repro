import { defineConfig } from 'tsup';
import { getConfig } from './get-config';

export default defineConfig({
    ...getConfig({
        dts: true,
        external: ['react', 'wagmi', 'ethers'],
        entry: ['src/index.ts', 'src/component.tsx'],
    }),
});
