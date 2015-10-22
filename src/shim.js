import getPolyfill from './polyfill'

const doc = typeof(document) === 'object' ? document : {}
const builtin = doc.createNodeIterator
const polyfill = getPolyfill()


export default function shim() {
  if (polyfill !== builtin) doc.createNodeIterator = polyfill
}
