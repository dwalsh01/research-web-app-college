import {
  DELETE_DRAFT_START,
  DELETE_DRAFT_SUCCESS,
  DELETE_DRAFT_ERROR,
  DELETE_DRAFT_RESET
} from '../actions/actionType';

const initialState = {
  deleting: false,
  success: null,
  error: false,
  message: ''
};

export default function DeleteDraftReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_DRAFT_START:
      return {
        deleting: true,
        success: null,
        error: false,
        message: ''
      };
    case DELETE_DRAFT_SUCCESS:
      return {
        ...state,
        deleting: false,
        success: true,
        message: action.payload
      };
    case DELETE_DRAFT_ERROR:
      return {
        deleting: false,
        success: false,
        error: true,
        message: action.payload
      };
    case DELETE_DRAFT_RESET:
      return initialState;
    default:
      return state;
  }
}
