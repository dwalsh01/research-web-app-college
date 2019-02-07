import { combineReducers } from 'redux';
import authReducer from './auth';
import AllGrants from './AllGrants';

export default combineReducers({
  AllGrants,
  authReducer
});
