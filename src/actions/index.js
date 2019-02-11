import axios from 'axios';
import {
  FETCH_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  POST_BEGIN,
  POST_RESPONSE,
  POST_ERROR
} from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

export const fetchSampleGrants = () => dispatch => {
  dispatch(startFetchGrants());
  return axios
    .get('playground/testing')
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

export const registerUser = (first_name, second_name, job_title,
                            prefix, suffix, phone, phone_extension,
                            email, password, orcid) => dispatch => {
    dispatch(startRegisterRequest());
    return axios
      .post('/register', { first_name, second_name, job_title,
                            prefix, suffix, phone, phone_extension,
                            email, password, orcid }, { headers })
      .then(data => {
        dispatch(receiveRegisterResponse(data));
        return data;
      })
      .catch(error => dispatch(registrationError(error)));
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


export const startRegisterRequest = () => ({
  type: POST_BEGIN
});
export const receiveRegisterResponse = data => ({
  type: POST_RESPONSE,
  payload: data
});
export const registrationError = error => ({
  type: POST_ERROR,
  payload: error.message
});
