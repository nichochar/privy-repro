# privy-repro

## Useful Changes

`package.json` of `lib1` and `lib2` (i.e. `privy-wagmi-connector` and `@privy-io/react-auth` respectively) have been updated with the following (note `"type": "module"` especially):

```json
{
    "main": "./dist/index.js",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "typings": "./dist/index",
    "type": "module",
    "exports": {
        ".": {
            "import": "./dist/index.js",
            "require": "./dist/index.cjs",
            "types": "./dist/index.d.ts"
        }
    }
}
```

Both `tsup.config.json` have had their `externals` updated to make sure `wagmi` and `ethers` are also externals. This is just a good practice for peer dependencies across bundlers, it may not have been essential to get things working.

Also, no more custom formatting for output files (maybe you were doing that for an important reason though and will have to put it back).

`tsup.config.js` should look like the following for your libs:

```js
import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    external: ['react', 'wagmi', 'ethers'],
    entryPoints: ['src/index.ts'],
    format: ['cjs', 'esm'],
});
```
