module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'lib/umd.min.js',
    library: {
      type: 'umd',
      name: 'personas'
    },
    globalObject: 'this' // prevent error: `Uncaught ReferenceError: self is not define`
  },
  mode: 'production'
}
