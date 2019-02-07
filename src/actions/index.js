import axios from 'axios';
import {
  FETCH_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

export const fetchSampleGrants = () => dispatch => {
  dispatch(startFetchGrants());
  return axios
    .get('/testing')
    .then(response => response.data)
    .then(data => {
      dispatch(recieveGrants(data));
    })
    .catch(error => dispatch(errorFetchingData(error)));
};

export const login = (email, password) => dispatch => {
  dispatch(startLogin());
  return axios
    .post('/login_user', { email, password }, { headers })
    .then(response => response.data)
    .then(data => {
      dispatch(loginSuccess(data));
      return data;
    })
    .catch(error => dispatch(loginError(error.message)));
};

export const startLogin = () => ({
  type: LOGIN_BEGIN
});
export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});
export const loginError = msg => ({
  type: LOGIN_ERROR,
  payload: msg
});
export const startFetchGrants = () => ({
  type: FETCH_BEGIN
});

export const recieveGrants = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const errorFetchingData = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error.message
});
