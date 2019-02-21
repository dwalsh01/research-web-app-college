import { USER_DATA, NO_USER, LOGOUT_BEGIN } from '../actions/actionType';

const initialState = {
  isLoggedIn: null,
  user: null
};
export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_BEGIN:
      return {
        isLoggedIn: false,
        user: null
      };
    case USER_DATA:
      return {
        isLoggedIn: true,
        user: action.payload
      };
    case NO_USER:
      return { isLoggedIn: false, user: null };
    default:
      return state;
  }
}
