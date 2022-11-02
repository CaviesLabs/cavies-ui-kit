/* eslint-disable prettier/prettier */
/* eslint-disable import/no-anonymous-default-export */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
// import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default {
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
