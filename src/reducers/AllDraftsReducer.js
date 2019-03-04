import {
  ALL_DRAFT_BEGIN,
  ALL_DRAFT_SUCCESS,
  ALL_DRAFT_ERROR,
  ALL_DRAFT_NONE
} from '../actions/actionType';

const initialState = {
  fetching: false,
  drafts: [],
  error: false,
  errorMsg: '',
  message: ''
};

export default function AllDraftsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_DRAFT_BEGIN:
      return {
        fetching: true,
        drafts: [],
        error: false,
        errorMsg: ''
      };
    case ALL_DRAFT_NONE:
      return {
        ...state,

        fetching: false,
        message: action.payload
      };
    case ALL_DRAFT_SUCCESS:
      return {
        ...state,
        message: '',
        fetching: false,
        drafts: action.payload
      };
    case ALL_DRAFT_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
