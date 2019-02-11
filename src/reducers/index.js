import { combineReducers } from 'redux';
import authReducer from './auth';
import AllGrants from './AllGrants';
import regReducer from './register';

export default combineReducers({
  AllGrants,
  authReducer,
  regReducer
});
