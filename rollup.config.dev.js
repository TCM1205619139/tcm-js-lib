import RollupPluginJson from 'rollup-plugin-json'
import RollupPluginCommonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import cleaner from 'rollup-plugin-cleaner'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
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
  ]
}