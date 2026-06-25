import path from 'path'
import { fileURLToPath } from 'url'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json' with { type: "json" }

const baseDeps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]

function makeConfig({ themed }) {
  const suffix = themed ? '_themed' : ''
  const externalDeps = themed ? baseDeps : baseDeps.filter(p => p !== 'styled-components')

  return {
    input: 'src/index.js',
    output: [
      { file: `dist/index${suffix}.cjs.js`, format: 'cjs', exports: 'default' },
      { file: `dist/index${suffix}.esm.js`, format: 'esm' }
    ],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        plugins: ['@babel/transform-runtime']
      }),
      resolve(),
      commonjs()
    ],
    external: (id) =>
      externalDeps.some(p => id === p || id.startsWith(p + '/')) ||
      /@babel\/runtime/.test(id)
  }
}

export default [
  makeConfig({ themed: false }),
  makeConfig({ themed: true })
]
