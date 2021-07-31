import RollupPluginJson from 'rollup-plugin-json'
import RollupPluginCommonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'tcm-js-lib'
    }
  ],
  plugins: [
    cleaner({
      targets: [
        './dist/'
      ]
    }),
    RollupPluginCommonjs(),
    RollupPluginJson(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
}