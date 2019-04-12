/**
 * NODE_ENV accessor
 * @module asenv
 */

'use strict'


const constants = require('./constants')
const getEnv = require('./get_env')
const index = require('./index')
const isDevelopment = require('./is_development')
const isProduction = require('./is_production')
const isTest = require('./is_test')
const setEnv = require('./set_env')
const unlessProduction = require('./unless_production')

exports.constants = constants
exports.getEnv = getEnv
exports.index = index
exports.isDevelopment = isDevelopment
exports.isProduction = isProduction
exports.isTest = isTest
exports.setEnv = setEnv
exports.unlessProduction = unlessProduction

module.exports = {
  constants,
  getEnv,
  index,
  isDevelopment,
  isProduction,
  isTest,
  setEnv,
  unlessProduction
}
