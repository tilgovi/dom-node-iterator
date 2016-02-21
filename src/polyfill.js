/*global document*/
import adapter from './adapter'
import builtin from './builtin'
import implementation from './implementation'


export default function getPolyfill() {
  try {
    const doc = typeof(document) === 'undefined' ? {} : document
    const iter = builtin(doc, 0xFFFFFFFF, null, false)
    if (iter.referenceNode === doc) return builtin
    return adapter
  } catch (_) {
    return implementation
  }
}
