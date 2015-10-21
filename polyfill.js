import adapter from './adapter'
import implementation from './implementation'


export default function getPolyfill() {
  let document = global.document
  let builtin = typeof(document) !== 'undefined' && document.createNodeIterator

  if (typeof(builtin) === 'function') {
    let iter = builtin.call(document, document, 0xFFFFFFFF, null, false)
    if (iter.referenceNode === document) return builtin
    return adapter
  }

  return implementation
}
