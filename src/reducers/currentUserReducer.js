import { USER_DATA, NO_USER, LOGOUT_BEGIN, LOGIN_ERROR } from '../actions/actionType';

const initialState = {
  isLoggedIn: null,
  user: null,
  errorMsg: ''
};
export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_BEGIN:
      return {
        isLoggedIn: false,
        user: null,
        errorMsg: ''
      };
    case LOGIN_ERROR:
      return {
        isLoggedIn: false,
        user: null,
        errorMsg: action.payload
      };
    case USER_DATA:
      return {
        isLoggedIn: true,
        user: action.payload,
        errorMsg: ''
      };
    case NO_USER:
      return { isLoggedIn: false, user: null, errorMsg: '' };
    default:
      return state;
  }
}
