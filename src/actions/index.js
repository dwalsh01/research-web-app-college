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
  SPECIFIC_FAIL
} from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

export function currentUser() {
  return dispatch => {
    axios
      .get('/api/user')
      .then(response => response.data)
      .then(data => {
        if (data.user === 0) {
          return dispatch(noUser());
        }
        return dispatch(userLoginData(data.user));
      });
  };
}

export const userLoginData = user => ({
  type: USER_DATA,
  payload: user
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
      .catch(err => console.log(err.message));
  };
}

export const educationBegin = () => ({
  type: EDUCATION_BEGIN
});

export const educationSuccess = education => ({
  type: EDUCATION_SUCCESS,
  payload: education
});

export function login(email, password) {
  return dispatch => {
    dispatch(startLogin());
    return axios
      .post('/login_user', { email, password }, { headers })
      .then(response => response.data)
      .then(data => {
        console.log(data);
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
// TODO: Create proposal form for admin users
// TODO: Look at how to hide routes depending on user status (admin, researcher, etc.)

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

// export function updatePersonalInfo(info) {
//   return dispatch => {
//     axios.post('/api/update_personal', )
//   }
// }
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
