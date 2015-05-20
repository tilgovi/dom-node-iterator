'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createNodeIterator = createNodeIterator;
exports.install = install;

function createNodeIterator(root, whatToShow, filter) {
  iter = global.document.createNodeIterator(root, whatToShow, filter);
  return typeof iter.referenceNode === 'undefined' ? shim(iter, root) : iter;
}

function install() {
  if ('referenceNode' in NodeIterator.prototype) return;
  global.document.createNodeIterator = createNodeIterator;
}

function shim(iter, root) {
  var _referenceNode = root;
  var _pointerBeforeReferenceNode = true;

  return Object.create(NodeIterator.prototype, {
    root: {
      get: function get() {
        return iter.root;
      }
    },

    whatToShow: {
      get: function get() {
        return iter.whatToShow;
      }
    },

    filter: {
      get: function get() {
        return iter.filter;
      }
    },

    referenceNode: {
      get: function get() {
        return _referenceNode;
      }
    },

    pointerBeforeReferenceNode: {
      get: function get() {
        return _pointerBeforeReferenceNode;
      }
    },

    nextNode: {
      value: function value() {
        _referenceNode = iter.nextNode();
        _pointerBeforeReferenceNode = false;
        return _referenceNode;
      }
    },

    previousNode: {
      value: function value() {
        _referenceNode = iter.previousNode();
        _pointerBeforeReferenceNode = true;
        return _referenceNode;
      }
    }
  });
}

