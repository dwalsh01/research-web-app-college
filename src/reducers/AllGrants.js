import { FETCH_BEGIN, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../actions/actionType';

const initialState = {
  fetching: false,
  data: [],
  error: false
};

export default function AllGrants(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        fetching: true,
        data: [],
        error: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        fetching: false,
        data: action.payload,
        error: false
      };
    case FETCH_DATA_FAILURE:
      return {
        fetching: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
}
