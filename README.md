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

With a CommonJS bundler, use npm and then `require('node-iterator-shim')`

    npm install node-iterator-shim

With a script tag, include one of `node-iterator-shim.js` or the minified
`node-iterator-shim.min.js` from the `dist` directory.

With AMD loaders, these scripts should also work.

Usage
=====

#### `document.createNodeIterator(root, whatToShow, [filter])`

See [the documentation at the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator)
for more information about using `NodeIterator`.
