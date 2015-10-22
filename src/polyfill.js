import adapter from './adapter'
import implementation from './implementation'

const document = global.document || {}
const builtin = document.createNodeIterator


export default function getPolyfill() {
  if (typeof(builtin) === 'function') {
    const iter = builtin.call(document, document, 0xFFFFFFFF, null, false)
    if (iter.referenceNode === document) return builtin
    return adapter
  }

  return implementation
}
