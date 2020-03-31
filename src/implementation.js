export default createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  return new NodeIterator(root, whatToShow, filter)
}


class NodeIterator {
  constructor(root, whatToShow, filter) {
    this.root = root
    this.whatToShow = whatToShow
    this.filter = filter
    this.referenceNode = root
    this.pointerBeforeReferenceNode = true
    this._filter = (node) => filter ? filter(node) === 1 : true
    this._show = (node) => whatToShow >> node.nodeType - 1 & 1 === 1
  }

  nextNode() {
    let node = this.referenceNode
    let before = this.pointerBeforeReferenceNode

    while(true) {
      if (before) {
        before = false
      } else {
        if (node.firstChild) node = node.firstChild
        else {
          do {
            if (node === this.root) return null
            if (node.nextSibling) break
            node = node.parentNode
          } while (true)
          node = node.nextSibling
        }
      }

      if (this._show(node) && this._filter(node)) break
    }

    this.referenceNode = node
    this.pointerBeforeReferenceNode = before
    return node
  }

  previousNode() {
    let before = this.pointerBeforeReferenceNode
    let node = this.referenceNode

    while (true) {
      if (!before) {
        before = true
      } else {
        if (node === this.root) return null
        if (node.previousSibling) {
          node = node.previousSibling
          while (node.lastChild) node = node.lastChild
        } else node = node.parentNode
      }

      if(this._show(node) && this._filter(node)) break
    }

    this.referenceNode = node
    this.pointerBeforeReferenceNode = before
    return node
  }

  toString() {
    return '[object NodeIterator]'
  }
}
