import { combineReducers } from 'redux';

import posts from './posts';
import regions from './regions';

const rootReducers = combineReducers({
  posts,
  regions,
});

export default rootReducers;
