import implementation from './implementation'
export { default as getPolyfill } from './polyfill'
export { default as implementation } from './implementation'
export { default as shim } from './shim'

export default function createNodeIterator(document, root, whatToShow, filter) {
  return implementation.call(document, root, whatToShow, filter)
}
