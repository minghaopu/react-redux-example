if (__ENV__ === 'production') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}