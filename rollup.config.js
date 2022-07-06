import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";
// import files from "rollup-plugin-import-file";
import commonjs from '@rollup/plugin-commonjs';
// import url from '@rollup/plugin-url';
// import gltf from 'rollup-plugin-gltf';
// import smartAsset from "rollup-plugin-smart-asset"

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
    //   files({
    //     output: "dist/assets/files",
    //     extensions: /\.(glb|gltf)$/,
    //     hash: true,
    //   }),
    //   url({
    //     include: '**/*.glb',
    //     destDir: 'dist/assets/files'
    //   }),
    //   gltf({
    //     include: ['**/*.gltf','**/*.glb'],
    //     inlineAssetLimit: 250 * 1024, // 250kb
    //     inline: false,
    //   }),
    //   smartAsset({
    //     extensions: [".glb"],
    //     url: 'inline',
    //     // assetsPath: 'assets/files'
    //   }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/react", "@babel/env"],
        babelHelpers: 'bundled'
      }),
      commonjs(),
      external(),
      nodeResolve({ extensions: [".mjs", ".js", ".json", ".node", ".jsx"] }),
    //   terser(),
    ],
  },
];
