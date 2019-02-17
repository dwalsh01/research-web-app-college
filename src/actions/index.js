import axios from 'axios';
import { USER_DATA, NO_USER, LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './actionType';

const headers = {
  'Content-Type': 'application/json'
};

export const currentUser = () => dispatch =>
  axios
    .get('/api/user')
    .then(response => response.data)
    .then(data => {
      if (data.user === false) {
        dispatch(noUser());
      } else {
        dispatch(userLoginData(data.user));
      }
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
