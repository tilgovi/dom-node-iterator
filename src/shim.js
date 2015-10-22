import getPolyfill from './polyfill'

const document = typeof(document) === 'object' ? document : {}
const builtin = document.createNodeIterator
const polyfill = getPolyfill()


export default function shim() {
  if (polyfill !== builtin) document.createNodeIterator = polyfill
}
