import axios from 'axios';
import {
  USER_DATA,
  NO_USER,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_BEGIN,
  TEAMS_SUCCESS,
  TEAMS_BEGIN
} from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

export const currentUser = () => dispatch =>
  axios
    .get('/api/user')
    .then(response => response.data)
    .then(data => {
      if (data.user === 0) {
        return dispatch(noUser());
      }
      return dispatch(userLoginData(data.user));
    });

export const userLoginData = user => ({
  type: USER_DATA,
  payload: user
});

export const noUser = () => ({
  type: NO_USER
});

export const login = (email, password) => dispatch => {
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

export const startLogin = () => ({
  type: LOGIN_BEGIN
});

export const loginError = msg => ({
  type: LOGIN_ERROR,
  payload: msg
});

export const logout = () => dispatch => {
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

export const logoutBegin = () => ({
  type: LOGOUT_BEGIN
});

export const fetchTeams = () => dispatch => {
  dispatch(fetchTeamsBegin());
  axios
    .get('/api/get_teams')
    .then(response => response.data)
    .then(data => {
      dispatch(fetchTeamsSuccess(data.teams));
    })
    .catch(err => console.log(err));
};
export const fetchTeamsBegin = () => ({
  type: TEAMS_BEGIN
});

export const fetchTeamsSuccess = teams => ({
  type: TEAMS_SUCCESS,
  payload: teams
});
