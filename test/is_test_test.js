/**
 * Test case for isTest.
 * Runs with mocha.
 */
'use strict'

const isTest = require('../lib/is_test.js')
const assert = require('assert')


describe('is-test', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Is test', async () => {
    process.env.NODE_ENV = 'test'
    assert.ok(isTest())
  })
})

/* global describe, before, after, it */
