import { TEAMS_SUCCESS } from '../actions/actionType';

const initialState = {
  teams: []
};
export default function TeamsReducer(state = initialState, action) {
  switch (action.type) {
    case TEAMS_SUCCESS:
      return {
        teams: action.payload
      };
    default:
      return state;
  }
}
