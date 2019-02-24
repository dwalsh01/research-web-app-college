import { TEAMS_SUCCESS, TEAMS_BEGIN } from '../actions/actionType';

const initialState = {
  isFetching: false,
  teams: []
};
export default function TeamsReducer(state = initialState, action) {
  switch (action.type) {
    case TEAMS_BEGIN:
      return {
        teams: [],
        isFetching: true
      };
    case TEAMS_SUCCESS:
      return {
        teams: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}
