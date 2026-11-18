const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, slugify, formatPrice } = require('../src/index');

test('greet', async (t) => {
  await t.test('greets a name', () => assert.equal(greet('Ada'), 'Hello, Ada!'));
  await t.test('falls back to world', () => assert.equal(greet(''), 'Hello, world!'));
  await t.test('trims whitespace', () => assert.equal(greet('  Grace  '), 'Hello, Grace!'));
});

test('slugify', async (t) => {
  await t.test('lowercases and hyphenates', () =>
    assert.equal(slugify('Hello Pipeline World'), 'hello-pipeline-world'));
  await t.test('strips punctuation', () => assert.equal(slugify('Ship it!!'), 'ship-it'));
  await t.test('collapses dashes', () => assert.equal(slugify(' a -- b '), 'a-b'));
});

test('formatPrice', async (t) => {
  await t.test('formats cents as dollars', () => assert.equal(formatPrice(1999), '$19.99'));
  await t.test('handles zero', () => assert.equal(formatPrice(0), '$0.00'));
  await t.test('rejects non-integers', () => assert.throws(() => formatPrice(1.5), TypeError));
});
