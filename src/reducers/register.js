import { POST_BEGIN, POST_RESPONSE, POST_ERROR } from '../actions/actionType';

const initialState = {
  success: false,
  error: false
};

export default function regReducer(state = initialState, action) {
  switch(action.type) {
    case POST_BEGIN:
      return {
        success: false,
        error: false
      };
    case POST_RESPONSE:
      return {
        success: true,
        error: false
      };
    case POST_ERROR:
        return { 
          success: false,
          error: true
        };
    default:
        return state;
  }
}
