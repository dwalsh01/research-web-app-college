import { USER_DATA, NO_USER } from '../actions/actionType';

const initialState = {
  isLoggedIn: false,
  user: null
};
export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
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
