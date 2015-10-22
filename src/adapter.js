export default createNodeIterator

const doc = typeof(document) === 'object' ? document : {}
const builtin = doc.createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  const iter = builtin.call(this, root, whatToShow, filter, false)
  return new NodeIterator(iter, root, whatToShow, filter)
}


class NodeIterator {
  constructor(iter, root, whatToShow, filter) {
    this.root = root
    this.whatToShow = whatToShow
    this.filter = filter
    this.referenceNode = root
    this.pointerBeforeReferenceNode = true
    this._iter = iter
  }

  nextNode() {
    const result = this._iter.nextNode()
    this.pointerBeforeReferenceNode = false
    if (result === null) return null
    this.referenceNode = result
    return this.referenceNode
  }

  previousNode() {
    const result = this._iter.previousNode()
    this.pointerBeforeReferenceNode = true
    if (result === null) return null
    this.referenceNode = result
    return this.referenceNode
  }

  toString() {
    return '[object NodeIterator]'
  }
}
