import { combineReducers } from 'redux';

import posts from './posts';
import app from './app';

const rootReducers = combineReducers({
  posts,
  app,
});

export default rootReducers;
