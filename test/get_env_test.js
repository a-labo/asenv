/**
 * Test case for getEnv.
 * Runs with mocha.
 */
'use strict'

const getEnv = require('../lib/get_env.js')
const assert = require('assert')


describe('get-env', function () {
  this.timeout(3000)

  before(async () => {
  })

  after(async () => {

  })

  it('Get env', async () => {
    process.env.NODE_ENV = 'fuge'
    assert.equal(getEnv(), 'fuge')
  })
})

/* global describe, before, after, it */
