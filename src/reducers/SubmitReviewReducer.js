import {
  SUBMIT_REVIEW_START,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_ERROR
} from '../actions/actionType';

const initalState = {
  posting: false,
  success: null,
  msg: ''
};

export default function SubmutReviewReducer(state = initalState, action) {
  switch (action.type) {
    case SUBMIT_REVIEW_START:
      return {
        ...initalState,
        posting: true
      };
    case SUBMIT_REVIEW_SUCCESS:
      return {
        ...initalState,
        success: true,
        msg: action.payload
      };
    case SUBMIT_REVIEW_ERROR:
      return {
        posting: false,
        success: false,
        msg: action.payload
      };
    default:
      return state;
  }
}
