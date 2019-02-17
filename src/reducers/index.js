import { combineReducers } from 'redux';
import authReducer from './auth';
import AllGrants from './AllGrants';
import currentUserReducer from './currentUserReducer';

export default combineReducers({
  AllGrants,
  authReducer,
  currentUserReducer
});
