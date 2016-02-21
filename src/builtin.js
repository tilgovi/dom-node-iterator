export default createNodeIterator


function createNodeIterator(root, whatToShow = 0xFFFFFFFF, filter = null) {
  const doc = root.ownerDocument
  return doc.createNodeIterator.call(doc, root, whatToShow, filter)
}
