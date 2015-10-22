/*global document*/
import adapter from './adapter'
import implementation from './implementation'

const doc = typeof(document) === 'undefined' ? {} : document
const builtin = doc.createNodeIterator


export default function getPolyfill() {
  if (typeof(builtin) === 'function') {
    const iter = builtin.call(doc, doc, 0xFFFFFFFF, null, false)
    if (iter.referenceNode === doc) return builtin
    return adapter
  }

  return implementation
}
