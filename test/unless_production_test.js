/**
 * Test case for unlessProduction.
 * Runs with mocha.
 */
'use strict'

const unlessProduction = require('../lib/unless_production.js')
const assert = require('assert')


describe('unless-production', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Unless production', async () => {
    unlessProduction(() => {

    })
  })
})

/* global describe, before, after, it */
