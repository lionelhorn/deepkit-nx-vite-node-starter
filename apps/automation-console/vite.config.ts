import {defineConfig, splitVendorChunkPlugin} from 'vite';
import {deepkitType} from "@deepkit/vite";
import {nxViteTsPaths} from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

export default defineConfig(({mode, ssrBuild}) => {
  console.log("vite.config.ts", mode, ssrBuild);

  return {
    build: {
      modulePreload: false,
      minify: false,
      rollupOptions: {
        preserveEntrySignatures: "strict",
        output: {
          esModule: true,
          format: "commonjs",
          ...(mode === 'development'
            ? {
              entryFileNames: `[name].js`,
              chunkFileNames: `[name].js`,
              assetFileNames: `[name].[ext]`,
            }
            : {}),
        },
        input: "./src/index.ts",
      }
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [
      deepkitType(),
      nxViteTsPaths(),
      // !ssrBuild && splitVendorChunkPlugin(),
      // !ssrBuild && liveReload({ delay: 500 }),
    ],
  }
});
