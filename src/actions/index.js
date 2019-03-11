/* eslint-disable camelcase */
import axios from 'axios';
import {
  USER_DATA,
  NO_USER,
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGOUT_BEGIN,
  TEAMS_SUCCESS,
  TEAMS_BEGIN,
  EDUCATION_BEGIN,
  EDUCATION_SUCCESS,
  PROPOSALS_SUCCESS,
  PROPOSALS_START,
  PROPOSALS_ERROR,
  SPECIFIC_START,
  SPECIFIC_SUCCESS,
  SPECIFIC_FAIL,
  DRAFT_BEGIN,
  DRAFT_ERROR,
  DRAFT_SUCCESS,
  ALL_DRAFT_BEGIN,
  ALL_DRAFT_SUCCESS,
  ALL_DRAFT_ERROR,
  ALL_DRAFT_NONE,
  EDUCATION_ERROR,
  EDUCATION_POST_START,
  EDUCATION_POST_ERROR,
  EDUCATION_POST_SUCCESS,
  SPECIFIC_DRAFT_SUCCESS,
  SPECIFIC_DRAFT_ERROR,
  SPECIFIC_DRAFT_START,
  DRAFT_RESET,
  DELETE_DRAFT_START,
  DELETE_DRAFT_SUCCESS,
  DELETE_DRAFT_ERROR,
  DELETE_DRAFT_RESET,
  SUBMIT_APPLICATION_START,
  SUBMIT_APPLICATION_ERROR,
  SUBMIT_APPLICATION_SUCCESS,
  FETCH_AREAS_START,
  FETCH_AREAS_SUCCESS,
  FETCH_AREAS_ERROR,
  ADD_APPLICATION_START,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_ERROR,
  FETCH_PENDING_SUCCESS,
  FETCH_PENDING_START,
  FETCH_PENDING_ERROR,
  FETCH_APPLICATION_START,
  FETCH_APPLICATION_SUCCESS,
  FETCH_APPLICATION_ERROR,
  APPLICATION_SELECTED,
  SUBMIT_REVIEW_START,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_ERROR,
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR
} from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

const multi = {
  'Content-Type': 'multipart/form-data'
};

export function fetchReviews() {
  return dispatch => {
    dispatch(fetchReviewsStart());
    axios
      .get('/reviews/all')
      .then(({ data }) => {
        data.forEach(el => {
          dispatch(fetchApplication(el.app_id));
        });
        dispatch(fetchReviewsSuccess(data));
      })
      .catch(err => fetchReviewsError(err.message));
  };
}

export const fetchReviewsStart = () => ({
  type: FETCH_REVIEWS_START
});
export const fetchReviewsSuccess = data => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: data
});
export const fetchReviewsError = msg => ({
  type: FETCH_REVIEWS_ERROR,
  payload: msg
});
export function submitReview(data) {
  const { app_id, ...rest } = data;
  return dispatch => {
    dispatch(submitReviewStart());
    axios
      .post(`/reviews/add/${app_id}`, rest, headers)
      .then(response => {
        console.log(response.data);
        dispatch(submitReviewSuccess(response.data.message));
      })
      .catch(err => dispatch(submitReviewError(err.message)));
  };
}

export const submitReviewStart = () => ({ type: SUBMIT_REVIEW_START });
export const submitReviewSuccess = msg => ({ type: SUBMIT_REVIEW_SUCCESS, payload: msg });
export const submitReviewError = msg => ({ type: SUBMIT_REVIEW_ERROR, payload: msg });

export const selectApplication = application => dispatch =>
  dispatch({ type: APPLICATION_SELECTED, payload: application });

export function fetchApplication(id) {
  return dispatch => {
    dispatch(fetchApplicationStart());
    axios
      .get(`/calls/apply/get/${id}`)
      .then(response => response.data)
      .then(data => {
        dispatch(fetchApplicationSuccess(data));
      })
      .catch(err => dispatch(fetchApplicationError(err.message)));
  };
}

export const fetchApplicationStart = () => ({ type: FETCH_APPLICATION_START });
export const fetchApplicationSuccess = data => ({ type: FETCH_APPLICATION_SUCCESS, payload: data });
export const fetchApplicationError = msg => ({ type: FETCH_APPLICATION_ERROR, payload: msg });

export function fetchPending() {
  return dispatch => {
    dispatch(pendingStart());
    return axios
      .get('/reviews/pending')
      .then(response => response.data)
      .then(data => {
        data.reviews.forEach(el => {
          dispatch(fetchApplication(el.app_id));
        });
        dispatch(pendingSuccess(data.reviews));
      })
      .catch(err => dispatch(pendingError(err.message)));
  };
}
export const pendingStart = () => ({
  type: FETCH_PENDING_START
});

export const pendingSuccess = data => ({
  type: FETCH_PENDING_SUCCESS,
  payload: data
});

export const pendingError = data => ({
  type: FETCH_PENDING_ERROR,
  payload: data
});

export function addApplication(form) {
  // const data = new FormData();
  const { files, ...newForm } = form;
  // data.append('image', files[0].file);
  // data.append('data', newForm);
  // console.log(data);
  return dispatch => {
    dispatch(addAppplicationStart());
    axios
      .post('/calls/add', newForm, { multi })
      .then(response => {
        dispatch(addAppplicationSuccess(response.data.message));
      })
      .catch(err => {
        dispatch(addAppplicationError(err.message));
      });
    // axios.post('/calls/add', formData, {multi})
  };
}

export const addAppplicationStart = () => ({
  type: ADD_APPLICATION_START
});
export const addAppplicationSuccess = msg => ({
  type: ADD_APPLICATION_SUCCESS,
  payload: msg
});
export const addAppplicationError = msg => ({
  type: ADD_APPLICATION_ERROR,
  payload: msg
});

export function fetchAreas() {
  return dispatch => {
    dispatch(fetchAreasStart());
    return axios
      .get('/api/nrp')
      .then(response => {
        dispatch(fetchAreasSuccess(response.data.nrp));
      })
      .catch(err => dispatch(fetchAreasError(err.message)));
  };
}
export const fetchAreasStart = () => ({
  type: FETCH_AREAS_START
});
export const fetchAreasSuccess = areas => ({
  type: FETCH_AREAS_SUCCESS,
  payload: areas
});
export const fetchAreasError = msg => ({
  type: FETCH_AREAS_ERROR,
  payload: msg
});

export function submitApplication(application) {
  const shape = {
    proposal_id: application.id,
    title: application.data.title,
    duration: application.data.duration,
    amount_required: 100000,
    nrp_area: application.data.nprArea,
    textbox: application.data.proposal_legal_remit,
    animal_statement: application.data.ethicalAnimals,
    human_statement: application.data.ethicalMaterials,
    applicant_country: application.data.country,
    abstract: application.data.scientificAbstract,
    lay_abstract: application.data.layAbstract,
    signed: false,
    list_of_co_applicants: application.data.coApplicants,
    list_of_collaborators: application.data.collaborators,
    files: []
  };
  return dispatch => {
    dispatch(submitApplicationStart());
    axios
      .post(`/calls/apply/${application.id}`, shape, { multi })
      .then(response => {
        dispatch(submitApplicationSuccess(response.data));
      })
      .catch(err => {
        dispatch(submitApplicationError(err));
      });
  };
}
export const submitApplicationStart = () => ({
  type: SUBMIT_APPLICATION_START
});
export const submitApplicationSuccess = msg => ({
  type: SUBMIT_APPLICATION_SUCCESS,
  payload: msg
});
export const submitApplicationError = msg => ({
  type: SUBMIT_APPLICATION_ERROR,
  payload: msg
});

export function submitDraft(formData) {
  return dispatch => {
    axios
      .post(`/calls/apply/${formData.id}/draft`, { formData }, { headers })
      .then(response => {
        dispatch(submitDraftSuccess(response.data.message));
      })
      .catch(err => dispatch(submitDraftError(err.message)));
  };
}

export const submitDraftBegin = () => ({
  type: DRAFT_BEGIN
});

export const submitDraftSuccess = message => ({
  type: DRAFT_SUCCESS,
  payload: message
});
export const submitDraftError = message => ({
  type: DRAFT_ERROR,
  payload: message
});

export function fetchAllDrafts() {
  return dispatch => {
    dispatch(fetchAllDraftsBegin());
    axios
      .get('/calls/apply/draft/all')
      .then(({ data }) => {
        if (data.message) {
          return dispatch(noDraftsCurrently(data.message));
        }
        return dispatch(fetchAllDraftsSuccess(data));
      })
      .catch(err => dispatch(fetchAllDraftsError(err.message)));
  };
}

export const noDraftsCurrently = message => ({
  type: ALL_DRAFT_NONE,
  payload: message
});
export const fetchAllDraftsBegin = () => ({
  type: ALL_DRAFT_BEGIN
});

export const fetchAllDraftsSuccess = drafts => ({
  type: ALL_DRAFT_SUCCESS,
  payload: drafts
});

export const fetchAllDraftsError = message => ({
  type: ALL_DRAFT_ERROR,
  payload: message
});

export function fetchSpecificDraft(id) {
  return dispatch => {
    dispatch(fetchDraftStart());
    axios
      .get(`/calls/apply/${id}/draft`)
      .then(response => {
        dispatch(fetchDraftSuccess(response.data));
      })
      .catch(err => dispatch(fetchDraftError(err.message)));
  };
}

export function resetPostDraft() {
  return dispatch => {
    dispatch(resetDraftPost());
  };
}

export const resetDraftPost = () => ({
  type: DRAFT_RESET
});
export const fetchDraftStart = () => ({
  type: SPECIFIC_DRAFT_START
});

export const fetchDraftSuccess = data => ({
  type: SPECIFIC_DRAFT_SUCCESS,
  payload: data
});

export const fetchDraftError = msg => ({
  type: SPECIFIC_DRAFT_ERROR,
  payload: msg
});

export function currentUser() {
  return dispatch => {
    axios
      .get('/api/user')
      .then(response => response.data)
      .then(data => {
        if (data.user === 0) {
          return dispatch(noUser());
        }
        return dispatch(userLoginData(data));
      });
  };
}

export const userLoginData = data => ({
  type: USER_DATA,
  payload: data
});

export const noUser = () => ({
  type: NO_USER
});

// TODO: Maybe implement this  in the current user action ?
// FIXME: fix all const functions into actual functions
export function fetchEducation() {
  return dispatch => {
    dispatch(educationBegin());
    axios
      .get('/profile/education')
      .then(response => response.data)
      .then(data => dispatch(educationSuccess(data.education)))
      .catch(err => dispatch(educationError(err.response.data.message)));
  };
}

export const educationBegin = () => ({
  type: EDUCATION_BEGIN
});

export const educationSuccess = education => ({
  type: EDUCATION_SUCCESS,
  payload: education
});

export const educationError = message => ({
  type: EDUCATION_ERROR,
  payload: message
});

export function postEducation(education) {
  return dispatch => {
    dispatch(EducationPostBegin());
    axios
      .post('/profile/education', education, { headers })
      .then(response => educationPostSuccess(response.data.message))
      .catch(err => console.log(err.message));
  };
}

export const EducationPostBegin = () => ({
  type: EDUCATION_POST_START
});
export const educationPostErr = msg => ({
  type: EDUCATION_POST_ERROR,
  payload: msg
});
export const educationPostSuccess = data => ({
  type: EDUCATION_POST_SUCCESS
});
export function login(email, password) {
  return dispatch => {
    dispatch(startLogin());
    return axios
      .post('/login_user', { email, password }, { headers })
      .then(response => response.data)
      .then(data => {
        dispatch(userLoginData(data));
        return data;
      })
      .catch(error => {
        dispatch(loginError(error.response.data.message));
      });
  };
}

export const startLogin = () => ({
  type: LOGIN_BEGIN
});

export const loginError = msg => ({
  type: LOGIN_ERROR,
  payload: msg
});

export function logout() {
  return dispatch => {
    dispatch(logoutBegin());
    axios
      .get('/api/logout')
      .then(response => response.data)
      .then(data => {
        if (data.logout === 'success') {
          dispatch(noUser());
        }
      })
      .catch(error => console.log(error.message));
  };
}

export const logoutBegin = () => ({
  type: LOGOUT_BEGIN
});

export function register(userInformation) {
  return dispatch => {
    axios
      .post('/register', userInformation, { headers })
      .then(response => response.data)
      .then(() => dispatch(login(userInformation.email, userInformation.password)))
      .catch(err => dispatch(loginError(err.message)));
  };
}

export function getProposals() {
  return dispatch => {
    dispatch(getProposalsStart());
    axios
      .get('/calls/list')
      .then(response => response.data)
      .then(data => dispatch(getProposalsSuccess(data)))
      .catch(err => dispatch(getProposalsError(err.message)));
  };
}

export const getProposalsStart = () => ({
  type: PROPOSALS_START
});
export const getProposalsSuccess = proposals => ({
  type: PROPOSALS_SUCCESS,
  payload: proposals
});

export const getProposalsError = error => ({
  type: PROPOSALS_ERROR,
  payload: error
});

export function getFullProposal(id) {
  return dispatch => {
    dispatch(fullProposalStart());
    axios
      .get(`/calls/show/${id}`)
      .then(response => response.data)
      .then(data => dispatch(fullProposalSuccess(data)))
      .catch(err => dispatch(fullProposalError(err.message)));
  };
}
export const fullProposalStart = () => ({ type: SPECIFIC_START });
export const fullProposalSuccess = data => ({ type: SPECIFIC_SUCCESS, payload: data });
export const fullProposalError = msg => ({ type: SPECIFIC_FAIL, payload: msg });

export function deleteDraft(id) {
  return dispatch => {
    dispatch(deleteDraftStart());
    axios
      .get(`/calls/apply/draft/delete/${id}`)
      .then(response => {
        dispatch(deleteDraftSuccess(response.data.message));
        dispatch(fetchAllDrafts());
      })
      .catch(err => dispatch(deleteDraftError(err.message)));
  };
}

export function resetDeleteDraft() {
  return dispatch => {
    dispatch(deleteDraftReset());
  };
}

export const deleteDraftReset = () => ({
  type: DELETE_DRAFT_RESET
});
export const deleteDraftStart = () => ({
  type: DELETE_DRAFT_START
});
export const deleteDraftSuccess = msg => ({
  type: DELETE_DRAFT_SUCCESS,
  payload: msg
});
export const deleteDraftError = msg => ({
  type: DELETE_DRAFT_ERROR,
  payload: msg
});

export function fetchTeams() {
  return dispatch => {
    dispatch(fetchTeamsBegin());
    axios
      .get('/api/get_teams')
      .then(response => response.data)
      .then(data => {
        dispatch(fetchTeamsSuccess(data.teams));
      })
      .catch(err => console.log(err));
  };
}
export const fetchTeamsBegin = () => ({
  type: TEAMS_BEGIN
});

export const fetchTeamsSuccess = teams => ({
  type: TEAMS_SUCCESS,
  payload: teams
});
