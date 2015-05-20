NodeIterator Shim
=================

Adds support for the `referenceNode` and `pointerBeforeReferenceNode`
properties of the `NodeIterator` interface for browsers that don't support it.

Installation
============

There are a few different ways to include the library.

With a CommonJS bundler to `require('node-iterator-shim')`:

    npm install dom-seek

With a script tag, include one of the scripts from the `dist` directory.

RequireJS and other AMD loaders should be able to wrap the CommonJS module
in index.js.

Usage
=====

## `nodeIteratorShim.install()`

Installs the shim, so that objects returned by `document.createNodeIterator`
support the full interface.

If the browser already supports the full interface then this function does
nothing. It should always be safe to call it.

## `createNodeIterator(root, whatToShow, [filter])`

Creates a new instance of `NodeIterator`.
See [the documentation](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator).
