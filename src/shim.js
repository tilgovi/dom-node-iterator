import getPolyfill from './polyfill'


export default function shim() {
  let document = global.document || {}
  let builtin = document.createNodeIterator
  let polyfill = getPolyfill()
  if (polyfill !== builtin) document.createNodeIterator = polyfill
}
