NodeIterator Shim
=================

`NodeIterator` is an interface originally specified by
[DOM Level 2](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Iterator-overview).
While it is a useful tool for seeking within the nodes of the DOM, it has
[some warts](http://ejohn.org/blog/unimpressed-by-nodeiterator/) and its
implementation is inconsistent across browsers.

Among the problems with `NodeIterator` are that it specifies arguments that
really should be optional, but are required on some browsers. Several browsers
expose two additional properties not in the original specification but later
added to the DOM living standard, `referenceNode` and
`pointerBeforeReferenceNode`.

This shim attempts to modernize `NodeIterator` for use in all major browsers.
It does this through the following modifications:

- The `filter` argument is really optional, even on IE.

- The `expandEntityReferences` argument is discarded and the corresponding
  property is not made available. It was never well supported and it is
  deprecated.

- The `referenceNode` and `pointerBeforeReferenceNode` properties are shimmed
  when they aren't available.

All of this is done without changing the built-in support where it is adequate.

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

See [the documentation at the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator)
for more information about using `NodeIterator`.
