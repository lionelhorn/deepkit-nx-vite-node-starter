import {defineConfig, splitVendorChunkPlugin} from 'vite';
import {deepkitType} from "@deepkit/vite";
import {nxViteTsPaths} from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import {resolve} from "node:path";

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
      deepkitType({
        // We need to set the tsconfig path here otherwise it may fail if no "cwd" set in nx task
        // https://github.com/deepkit/deepkit-framework/blob/c5642fac13ab3aa2cfb56588c2240d05af628a61/packages/vite/src/plugin.ts#L30
        tsConfig: resolve(__dirname, "tsconfig.json")
      }),
      nxViteTsPaths(),
      // !ssrBuild && splitVendorChunkPlugin(),
      // !ssrBuild && liveReload({ delay: 500 }),
    ],
  }
});
