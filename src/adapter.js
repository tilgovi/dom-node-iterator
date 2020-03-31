export default createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  const doc = (root.nodeType == 9) || root.ownerDocument
  const iter = doc.createNodeIterator(root, whatToShow, filter, false)
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
    if (result === null) return null
    this.referenceNode = result
    this.pointerBeforeReferenceNode = false
    return this.referenceNode
  }

  previousNode() {
    const result = this._iter.previousNode()
    if (result === null) return null
    this.referenceNode = result
    this.pointerBeforeReferenceNode = true
    return this.referenceNode
  }

  toString() {
    return '[object NodeIterator]'
  }
}
