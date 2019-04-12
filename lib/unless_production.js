/**
 * Do unless production
 * @function unlessProduction
 * @param {function} handler
 */
'use strict'

const isProduction = require('./is_production')

/** @lends unlessProduction */
function unlessProduction (handler) {
  if (isProduction()) {
    return false
  }
  return handler()
}

module.exports = unlessProduction
