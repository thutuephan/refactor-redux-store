// Create redux store and import reducers from reducers.js

import { createStore } from 'redux'

import { reducers } from './reducers'

export default createStore(reducers);
