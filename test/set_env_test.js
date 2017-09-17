/**
 * Test case for setEnv.
 * Runs with mocha.
 */
'use strict'

const setEnv = require('../lib/set_env.js')
const assert = require('assert')


describe('set-env', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Set env', async () => {
    setEnv('hoge')
    assert.equal(process.env.NODE_ENV, 'hoge')
  })
})

/* global describe, before, after, it */
