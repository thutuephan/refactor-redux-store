// Create redux store and import reducers from reducers.js

import { createStore } from 'redux'

import { reducer } from './reducers'

export default createStore(reducer);
