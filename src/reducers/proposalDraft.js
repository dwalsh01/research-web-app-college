import { DRAFT_BEGIN, DRAFT_SUCCESS, DRAFT_ERROR, DRAFT_RESET } from '../actions/actionType';

const initialState = {
  submitting: false,
  error: false,
  errorMsg: '',
  successMsg: ''
};

export default function proposalDraftReducer(state = initialState, action) {
  switch (action.type) {
    case DRAFT_BEGIN:
      return {
        submitting: true,
        error: false,
        errorMsg: '',
        successMsg: ''
      };
    case DRAFT_SUCCESS:
      return {
        submitting: false,
        successMsg: action.payload,
        errorMsg: '',
        error: false
      };
    case DRAFT_ERROR:
      return {
        sumbitting: false,
        error: true,
        errorMsg: action.payload,
        successMsg: ''
      };
    case DRAFT_RESET:
      return initialState;
    default:
      return state;
  }
}
