
const Glob = require('glob')

const plugins = []

Glob.sync('../src/**/*.route.js', {
  realpath: true,
  cwd: __dirname
}).forEach((file) => {
  plugins.push(require(file))
})

module.exports = plugins