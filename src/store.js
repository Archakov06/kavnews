import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducers from './reducers';

const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
