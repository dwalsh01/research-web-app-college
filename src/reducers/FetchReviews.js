import {
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR
} from '../actions/actionType';

const initialState = {
  fetching: false,
  reviews: [],
  msg: ''
};

export default function FetchReviews(state = initialState, action) {
  switch (action.type) {
    case FETCH_REVIEWS_START:
      return {
        ...initialState,
        fetching: true
      };
    case FETCH_REVIEWS_SUCCESS:
      return {
        fetching: false,
        reviews: action.payload,
        msg: ''
      };
    case FETCH_REVIEWS_ERROR:
      return {
        fetching: false,
        reviews: [],
        msg: action.payload
      };
    default:
      return state;
  }
}
