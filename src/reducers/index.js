import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';
import TeamsReducer from './TeamsReducer';
import EducationReducer from './EducationReducer';
import AllProposals from './AllProposals';
import proposalReducer from './proposalReducer';
import proposalDraftReducer from './proposalDraft';
import AllDraftsReducer from './AllDraftsReducer';
import PostEducationReducer from './PostEducationReducer';
import SpecificDraftReducer from './SpecificDraftReducer';

export default combineReducers({
  currentUserReducer,
  TeamsReducer,
  EducationReducer,
  AllProposals,
  proposalReducer,
  proposalDraftReducer,
  AllDraftsReducer,
  PostEducationReducer,
  SpecificDraftReducer
});
