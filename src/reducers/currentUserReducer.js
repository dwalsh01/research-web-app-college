import { USER_DATA, NO_USER, LOGOUT_BEGIN, LOGIN_ERROR } from '../actions/actionType';

const initialState = {
  isLoggedIn: null,
  user: null,
  role: '',
  errorMsg: ''
};
export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_BEGIN:
      return {
        isLoggedIn: false,
        user: null,
        role: '',
        errorMsg: ''
      };
    case LOGIN_ERROR:
      return {
        isLoggedIn: false,
        user: null,
        errorMsg: action.payload,
        role: ''
      };
    case USER_DATA:
      return {
        isLoggedIn: true,
        user: action.payload.user,
        role: action.payload.roles[0].name,
        errorMsg: ''
      };
    case NO_USER:
      return { isLoggedIn: false, user: null, role: '', errorMsg: '' };
    default:
      return state;
  }
}
