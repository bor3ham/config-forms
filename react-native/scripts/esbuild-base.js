const path = require('path')

const pkg = require(path.resolve('./package.json'))

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]

exports.config = {
  entryPoints: [
    'src/index.jsx',
  ],
  outdir: 'dist',
  metafile: true,
  bundle: true,
  format: 'esm',
  target: ['esnext'],
  external,
}
