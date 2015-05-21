export function createNodeIterator(root, whatToShow, filter = null) {
  iter = global.document.createNodeIterator(root, whatToShow, filter, false);
  return typeof(iter.referenceNode) === 'undefined' ? shim(iter, root) : iter;
}


export function install() {
  if ('referenceNode' in NodeIterator.prototype) return;
  global.document.createNodeIterator = createNodeIterator;
}


function shim(iter, root) {
  var _referenceNode = root;
  var _pointerBeforeReferenceNode = true;

  return Object.create(NodeIterator.prototype, {
    root: {
      get: function () {
        return iter.root;
      }
    },

    whatToShow: {
      get: function () {
        return iter.whatToShow;
      }
    },

    filter: {
      get: function () {
        return iter.filter;
      }
    },

    referenceNode: {
      get: function () {
        return _referenceNode;
      }
    },

    pointerBeforeReferenceNode: {
      get: function () {
        return _pointerBeforeReferenceNode;
      }
    },

    nextNode: {
      value: function () {
        _referenceNode = iter.nextNode();
        _pointerBeforeReferenceNode = false;
        return _referenceNode;
      }
    },

    previousNode: {
      value: function () {
        _referenceNode = iter.previousNode();
        _pointerBeforeReferenceNode = true;
        return _referenceNode;
      }
    }
  });
}
