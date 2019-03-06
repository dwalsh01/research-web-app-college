import {
  SPECIFIC_DRAFT_START,
  SPECIFIC_DRAFT_SUCCESS,
  SPECIFIC_DRAFT_ERROR
} from '../actions/actionType';

const initialState = {
  fetching: false,
  applicant: null,
  id: null,
  formData: {},
  error: false,
  errorMsg: ''
};

export default function SpecificDraftReducer(state = initialState, action) {
  switch (action.type) {
    case SPECIFIC_DRAFT_START:
      return {
        fetching: true,
        formData: {},
        error: false,
        errorMsg: '',
        applicant: null,
        id: null
      };
    case SPECIFIC_DRAFT_SUCCESS:
      return {
        ...state,
        fetching: false,
        formData: action.payload.draft.formData,
        applicant: action.payload.applicant,
        id: action.payload.applicant
      };
    case SPECIFIC_DRAFT_ERROR:
      return {
        fetching: false,
        applicant: null,
        id: null,
        error: true,
        formData: {},
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
