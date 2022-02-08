/* eslint-disable no-undef */
const { assert } = require('chai');
const { describe } = require('mocha');
const fabonacci = require('../fabonacci');

// Fabonacci tests.
describe('Fabonacci TDD Tests', () => {
  // First Test.
  it('Fabonacci output is a number', () => {
    assert.typeOf(fabonacci(3), 'number');
  });
  // Second Test
  it('nth element of 9 is 34', () => {
    assert.equal(fabonacci(9), 34);
  });
  // Third Test
  it('nth element of 10 is 55', () => {
    assert.equal(fabonacci(10), 55);
  });
  // Fourth Test
  it('nth element of 12 is 144', () => {
    assert.equal(fabonacci(12), 144);
  });
  // Fifth Test
  it('nth element of 15 is 610', () => {
    assert.equal(fabonacci(15), 610);
  });
});
