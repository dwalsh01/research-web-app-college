import { combineReducers } from 'redux';
import authReducer from './auth';
import AllGrants from './AllGrants';

const rootReducer = () =>
  combineReducers({
    auth: authReducer,
    grants: AllGrants
  });

export default rootReducer;
