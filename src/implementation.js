import define from 'define-properties'
export default createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  return new NodeIterator(root, whatToShow, filter)
}


class NodeIterator {
  constructor(root, whatToShow, filter) {
    define(this, {
      root: root,
      whatToShow: whatToShow,
      filter: filter,
      referenceNode: root,
      pointerBeforeReferenceNode: true,
      _filter: (node) => filter ? filter(node) === 1 : true,
      _show: (node) => whatToShow >> node.nodeType - 1 & 1 === 1,
    })
  }

  nextNode() {
    let before = this.pointerBeforeReferenceNode
    this.pointerBeforeReferenceNode = false

    let node = this.referenceNode
    if (before && this._show(node) && this._filter(node)) return node

    do {
      if (node.firstChild) {
        node = node.firstChild
        continue
      }

      do {
        if (node === this.root) return null
        if (node.nextSibling) break
      } while (node = node.parentNode)

      node = node.nextSibling
    } while(!this._show(node) || !this._filter(node))

    this.referenceNode = node
    this.pointerBeforeReferenceNode = false
    return node
  }

  previousNode() {
    let before = this.pointerBeforeReferenceNode
    this.pointerBeforeReferenceNode = true

    let node = this.referenceNode
    if (!before && this._show(node) && this._filter(node)) return node

    do {
      if (node === this.root) return null

      if (node.previousSibling) {
        node = node.previousSibling
        while (node.lastChild) node = node.lastChild
        continue
      }

      node = node.parentNode
    } while(!this._show(node) || !this._filter(node))

    this.referenceNode = node
    this.pointerBeforeReferenceNode = true
    return node
  }

  toString() {
    return '[object NodeIterator]'
  }
}
