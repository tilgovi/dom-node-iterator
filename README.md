NodeIterator
============

The `dom-node-iterator` package provides a spec-compliant implementation of
`NodeIterator` for environments that lack an implementation or conform to an
older specification.

In environments that implement an older specification or do not implement the
specification at all, behavior in the presence of DOM mutation is undefined.

This package implements the [es-shim API](https://github.com/es-shims/api)
interface. It works in an ES5-supported environment with a DOM implementation
and complies with the [spec](https://dom.spec.whatwg.org/#nodeiterator).

Installation
============

Using npm:

    npm install dom-node-iterator

Usage
=====

```js
// Install support, polluting the global namespace.
require('dom-node-iterator/auto');
var iter = document.createNodeIterator(document.body);

// Get the best implementation, without polluting the global namespace.
var createNodeIterator = require('dom-node-iterator');
var iter = createNodeIterator.call(document, document.body);
```
