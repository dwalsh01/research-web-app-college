import {
  ADD_APPLICATION_START,
  ADD_APPLICATION_SUCCESS,
  ADD_APPLICATION_ERROR
} from '../actions/actionType';

const initialState = {
  posting: false,
  success: null,
  msg: ''
};

export default function createApplicationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_APPLICATION_START:
      return {
        ...initialState,
        posting: true
      };
    case ADD_APPLICATION_SUCCESS:
      return {
        posting: false,
        success: true,
        msg: action.payload
      };
    case ADD_APPLICATION_ERROR:
      return {
        posting: false,
        success: false,
        msg: action.payload
      };
    default:
      return state;
  }
}
