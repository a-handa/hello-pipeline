// A few small, easy-to-read functions so the tests have something to check.

function greet(name) {
  const who = (name ?? '').trim();
  return who ? `Hello, ${who}!` : 'Hello, world!';
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatPrice(cents, currency = 'USD') {
  if (!Number.isInteger(cents)) throw new TypeError('cents must be an integer');
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
}

module.exports = { greet, slugify, formatPrice };
