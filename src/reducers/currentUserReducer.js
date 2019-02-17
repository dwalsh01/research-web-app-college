import { USER_DATA } from '../actions/actionType';

export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case USER_DATA:
      return action.payload;
    case 'NO_USER':
      return false;
    default:
      return state;
  }
}
