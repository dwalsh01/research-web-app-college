import { SPECIFIC_START, SPECIFIC_SUCCESS, SPECIFIC_FAIL } from '../actions/actionType';

const initialState = {
  isFetching: false,
  proposal: {},
  errorMsg: null
};
export default function proposalReducer(state = initialState, action) {
  switch (action.type) {
    case SPECIFIC_START:
      return {
        isFetching: true,
        proposal: {},
        errorMsg: null
      };
    case SPECIFIC_SUCCESS:
      return {
        isFetching: false,
        proposal: action.payload,
        errorMsg: null
      };
    case SPECIFIC_FAIL:
      return {
        isFetching: false,
        proposal: {},
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
