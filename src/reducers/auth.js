import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionType';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: false,
  errorMsg: ''
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        isLoggedIn: false,
        user: null,
        error: false,
        errorMsg: ''
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.payload,
        error: false,
        errorMsg: ''
      };
    case LOGIN_ERROR:
      return {
        isLoggedIn: true,
        user: null,
        errorMsg: action.payload,
        error: true
      };
    default:
      return state;
  }
}
