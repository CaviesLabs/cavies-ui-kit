'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var external = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var url = require('rollup-plugin-url');

/* eslint-disable prettier/prettier */
// import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

var rollup_config = {
  input: 'src/browser.ts',
  output: [{
      file: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss(),
    url({
      include: ['**/*.woff', '**/*.woff2', '**/*.otf', '**/*.svg', '**/*.png'],
      limit: Infinity,
    }),
    {
      input: 'dist/esm/types/browser.d.ts',
      output: [{
        file: 'dist/index.d.ts',
        format: 'esm',
      }, ],
      // plugins: [dts()],
    },
  ],
};

exports.default = rollup_config;
