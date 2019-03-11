import {
  FETCH_PENDING_START,
  FETCH_PENDING_SUCCESS,
  FETCH_PENDING_ERROR
} from '../actions/actionType';

const initialState = {
  fetching: false,
  success: null,
  applications: [],
  msg: ''
};

export default function PendingApplication(state = initialState, action) {
  switch (action.type) {
    case FETCH_PENDING_START:
      return {
        ...initialState,
        fetching: true
      };
    case FETCH_PENDING_SUCCESS:
      return {
        fetching: false,
        success: true,
        applications: action.payload,
        msg: ''
      };
    case FETCH_PENDING_ERROR:
      return {
        fetching: false,
        success: false,
        applications: [],
        msg: ''
      };
    default:
      return state;
  }
}
