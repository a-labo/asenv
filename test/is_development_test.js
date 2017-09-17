/**
 * Test case for isDevelopment.
 * Runs with mocha.
 */
'use strict'

const isDevelopment = require('../lib/is_development.js')
const assert = require('assert')


describe('is-development', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Is development', async () => {
    process.env.NODE_ENV = 'development'
    assert.ok(isDevelopment())
    process.env.NODE_ENV = 'production'
    assert.ok(!isDevelopment())
  })
})

/* global describe, before, after, it */
