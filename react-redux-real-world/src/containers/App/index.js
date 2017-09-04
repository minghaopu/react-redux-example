if (__ENV__ === 'production') {
  module.exports = require('./App.prod');
} else {
  module.exports = require('./App.dev');
}