/**
 * NODE_ENV accessor
 * @module asenv
 */

'use strict'

import constants from './constants'
import getEnv from './get_env'
import index from './index'
import isDevelopment from './is_development'
import isProduction from './is_production'
import isTest from './is_test'
import setEnv from './set_env'
import unlessProduction from './unless_production'

export {
  constants,
  getEnv,
  index,
  isDevelopment,
  isProduction,
  isTest,
  setEnv,
  unlessProduction,
}