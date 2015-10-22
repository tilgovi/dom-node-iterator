import define from 'define-properties'

import getPolyfill from './polyfill'


export default function shim() {
  let document = global.document || {}
  let builtin = document.createNodeIterator
  let polyfill = getPolyfill()
  define(
    document,
    {createNodeIterator: polyfill},
    {createNodeIterator: () => builtin !== polyfill}
  )
}
