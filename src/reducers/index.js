import { combineReducers } from 'redux';
import AllGrants from './AllGrants';
import currentUserReducer from './currentUserReducer';
import TeamsReducer from './TeamsReducer';

export default combineReducers({
  AllGrants,
  currentUserReducer,
  TeamsReducer
});
