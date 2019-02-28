import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import TeamsReducer from './TeamsReducer';
import EducationReducer from './EducationReducer';
import AllProposals from './AllProposals';
import proposalReducer from './proposalReducer';

export default combineReducers({
  currentUserReducer,
  TeamsReducer,
  EducationReducer,
  AllProposals,
  proposalReducer
});
