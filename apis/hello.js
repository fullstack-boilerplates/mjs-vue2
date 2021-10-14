const { platform } = require('os')

module.exports.hello = async name => `hello ${name}! from ${platform()}`