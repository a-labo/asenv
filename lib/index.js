/**
 * NODE_ENV accessor
 * @module asenv
 */

'use strict'

const d = (module) => module && module.default || module

const constants = d(require('./constants'))
const getEnv = d(require('./get_env'))
const index = d(require('./index'))
const isDevelopment = d(require('./is_development'))
const isProduction = d(require('./is_production'))
const isTest = d(require('./is_test'))
const setEnv = d(require('./set_env'))
const unlessProduction = d(require('./unless_production'))

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
