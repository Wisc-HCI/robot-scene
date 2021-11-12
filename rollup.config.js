import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import url from '@rollup/plugin-url';
import files from 'rollup-plugin-import-file';
import pkg from './package.json';

export default {
    input:'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env','@babel/preset-react']
      }),
    //   url({include:'**/*.glb'}),
      files({
        output: 'dist/assets',
        extensions: /\.(glb)$/,
        hash: false,
      }),
      resolve(),
      commonjs(),
      terser()
    ],
    external: Object.keys(pkg.peerDependencies)
  };