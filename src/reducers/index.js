import { combineReducers } from 'redux';
import AllGrants from './AllGrants';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  AllGrants,
  currentUserReducer
});
