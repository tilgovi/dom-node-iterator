'use strict';

var getPolyfill = require('./polyfill');

module.exports = function shimCreateNodeIterator() {
  var polyfill = getPolyfill();

  if (polyfill !== Document.prototype.createNodeIterator) {
    Document.prototype.createNodeIterator = polyfill;
  }

  return polyfill;
}
