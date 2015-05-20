NodeIterator Shim
=================

Adds support for the `referenceNode` and `pointerBeforeReferenceNode`
properties of the `NodeIterator` interface for browsers that don't support it.

Installation
============

There are a few different ways to include the library.

With a CommonJS bundler to `require('node-iterator-shim')`:

    npm install dom-seek

With a script tag, include `node-iterator-shim.js` or
`node-iterator-shim.min.js`:

    <script src="https://raw.githubusercontent.com/tilgovi/node-iterator-shim/master/node-iterator-shim.js"></script>

With RequireJS or other AMD loaders: include `node-iterator-shim.js`. It should
properly detect the AMD environment and register itself as a module.

Usage
=====

## `nodeIteratorShim.install()`

Installs the shim, so that objects returned by `document.createNodeIterator`
support the full interface.

## `createNodeIterator(root, whatToShow, [filter])`

Creates a new instance of `NodeIterator`.
See [the documentation](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator).
