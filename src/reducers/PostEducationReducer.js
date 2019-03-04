import {
  EDUCATION_POST_START,
  EDUCATION_POST_SUCCESS,
  EDUCATION_POST_ERROR
} from '../actions/actionType';

const initalState = {
  posting: false,
  success: null,
  errror: false,
  errorMsg: ''
};

export default function PostEducationReducer(state = initalState, action) {
  switch (action.type) {
    case EDUCATION_POST_START:
      return {
        posting: true,
        success: null,
        error: false,
        errorMsg: ''
      };
    case EDUCATION_POST_SUCCESS:
      return {
        ...state,
        posting: false,
        success: true
      };
    case EDUCATION_POST_ERROR:
      return {
        posting: false,
        success: false,
        error: true,
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
