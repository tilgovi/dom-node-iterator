/*global document*/
import builtin from './builtin'
import getPolyfill from './polyfill'


export default function shim() {
  const doc = typeof(document) === 'undefined' ? {} : document
  const polyfill = getPolyfill()
  if (polyfill !== builtin) doc.createNodeIterator = polyfill
  return polyfill
}
