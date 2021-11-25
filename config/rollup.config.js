// @ts-check

import { terser } from 'rollup-plugin-terser';
import typescript2 from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from '../package.json';
import dotenv from 'dotenv';
dotenv.config();
/**
 * Comment with library information to be appended in the generated bundles.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name}
 * Released under the ${pkg.license} License.
 */
`;

/**
 * Creates an output options object for Rollup.js.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
function createOutputOptions(options) {
  return {
    banner,
    name: '@usecsv/react',
    exports: 'default',
    sourcemap: true,
    ...options,
  };
}

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/index.tsx',
  output: [
    createOutputOptions({
      file: './build/index.js',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './build/index.cjs',
      format: 'commonjs',
    }),
    createOutputOptions({
      file: './build/index.mjs',
      format: 'esm',
    }),
    createOutputOptions({
      file: './build/index.esm.js',
      format: 'esm',
    }),
    createOutputOptions({
      file: './build/index.umd.js',
      format: 'umd',
    }),
    createOutputOptions({
      file: './build/index.umd.min.js',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
  plugins: [
    typescript2({
      clean: true,
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.module.json',
    }),
    commonjs(),
    nodeResolve(),
  ],
};

export default options;