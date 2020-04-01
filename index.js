'use strict'

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = Function.prototype.call.bind(implementation);

Object.defineProperties(bound, {
  getPolyfill: {
    configurable: true,
    enumerable: false,
    value: getPolyfill,
    writeable: true
  },
  implementation: {
    configurable: true,
    enumerable: false,
    value: implementation,
    writeable: true
  },
  shim: {
    configurable: true,
    enumerable: false,
    value: shim,
    writeable: true
  }
});

module.exports = bound;
