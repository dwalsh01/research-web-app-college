import { EDUCATION_BEGIN, EDUCATION_SUCCESS, EDUCATION_ERROR } from '../actions/actionType';

const initialState = {
  isFetching: false,
  education: {},
  errorMessage: ''
};

export default function EducationReducer(state = initialState, action) {
  switch (action.type) {
    case EDUCATION_BEGIN:
      return {
        isFetching: true,
        education: {},
        errorMessage: ''
      };
    case EDUCATION_SUCCESS:
      return {
        isFetching: false,
        education: action.payload,
        errorMesage: ''
      };
    case EDUCATION_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMesage: action.payload
      };

    default:
      return state;
  }
}
