import { createStore } from './core.js'
import reducer from './reducer.js'
import withLongger from './logger.js'

const { attach, connect, dispatch } = createStore(withLongger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}