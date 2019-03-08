import { FETCH_AREAS_START, FETCH_AREAS_SUCCESS, FETCH_AREAS_ERROR } from '../actions/actionType';

const initialState = {
  fetching: false,
  areas: [],
  error: false,
  msg: ''
};

export default function AreasReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AREAS_START:
      return {
        ...initialState,
        fetching: true
      };
    case FETCH_AREAS_SUCCESS:
      return {
        ...state,
        fetching: false,
        areas: action.payload
      };
    case FETCH_AREAS_ERROR:
      return {
        error: true,
        msg: action.payload,
        fetching: false,
        areas: []
      };
    default:
      return state;
  }
}
