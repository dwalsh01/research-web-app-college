import { PROPOSALS_START, PROPOSALS_SUCCESS, PROPOSALS_ERROR } from '../actions/actionType';

const initialState = {
  isFetching: false,
  proposals: [],
  errorMsg: ''
};

export default function AllProposals(state = initialState, action) {
  switch (action.type) {
    case PROPOSALS_START:
      return {
        isFetching: true,
        proposals: [],
        errorMsg: ''
      };
    case PROPOSALS_SUCCESS:
      return {
        isFetching: false,
        proposals: action.payload,
        errorMsg: ''
      };
    case PROPOSALS_ERROR:
      return {
        isFetching: false,
        proposals: [],
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
