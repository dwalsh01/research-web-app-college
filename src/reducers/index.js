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
import DeleteDraftReducer from './DeleteDraftReducer';
import PostApplicationReducer from './PostApplicationReducer';
import AreasReducer from './AreasReducer';
import createApplicationReducer from './createApplicationReducer';
import PendingApplication from './PendingApplication';
import FetchApplication from './FetchApplications';
import SelectApplication from './SelectApplication';
import SubmitReviewReducer from './SubmitReviewReducer';
import FetchReviews from './FetchReviews';

export default combineReducers({
  currentUserReducer,
  TeamsReducer,
  EducationReducer,
  AllProposals,
  proposalReducer,
  proposalDraftReducer,
  AllDraftsReducer,
  PostEducationReducer,
  SpecificDraftReducer,
  DeleteDraftReducer,
  PostApplicationReducer,
  AreasReducer,
  createApplicationReducer,
  PendingApplication,
  FetchApplication,
  SelectApplication,
  SubmitReviewReducer,
  FetchReviews
});
