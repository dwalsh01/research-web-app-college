import {
  FETCH_APPLICATION_START,
  FETCH_APPLICATION_SUCCESS,
  FETCH_APPLICATION_ERROR
} from '../actions/actionType';

const initialState = {
  fetching: false,
  applications: [],
  msg: ''
};

export default function FetchApplication(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPLICATION_START:
      return {
        fetching: true,
        applications: state.applications,
        msg: state.msg
      };
    case FETCH_APPLICATION_SUCCESS:
      return {
        fetching: false,
        applications: [...state.applications, action.payload]
      };
    case FETCH_APPLICATION_ERROR:
      return {
        ...state,
        fetching: false,
        msg: action.payload
      };

    default:
      return state;
  }
}
