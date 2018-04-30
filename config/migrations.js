
module.exports = {
  development: require('./default').db,
  production: require('./env/production').db
}
