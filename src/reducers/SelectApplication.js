import { APPLICATION_SELECTED } from '../actions/actionType';

const initialState = {
  application: null
};

export default function SelectApplication(state = initialState, action) {
  switch (action.type) {
    case APPLICATION_SELECTED:
      return {
        application: action.payload
      };
    default:
      return state;
  }
}
