import {
  SUBMIT_APPLICATION_START,
  SUBMIT_APPLICATION_SUCCESS,
  SUBMIT_APPLICATION_ERROR
} from '../actions/actionType';

const initialState = {
  posting: false,
  success: null,
  msg: ''
};

export default function PostApplicationReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_APPLICATION_START:
      return {
        posting: true,
        success: null,
        msg: ''
      };
    case SUBMIT_APPLICATION_SUCCESS:
      return {
        posting: false,
        success: true,
        msg: action.payload.message
      };
    case SUBMIT_APPLICATION_ERROR:
      return {
        posting: false,
        success: false,
        msg: action.payload.message
      };
    default:
      return state;
  }
}
