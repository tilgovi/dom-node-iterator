import { default as getPolyfill } from './polyfill'
import { default as implementation } from './implementation'
import { default as shim } from './shim'

const polyfill = getPolyfill()
polyfill.implementation = implementation
polyfill.shim = shim

export default polyfill
