import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer'
import tweets from './tweet_reducer'
const RootReducer = combineReducers({
  session,
  errors,
  tweets
});

export default RootReducer;