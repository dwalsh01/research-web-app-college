import axios from 'axios';
import { FETCH_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionType';

export const fetchSampleGrants = () => dispatch => {
  dispatch(startFetchGrants());
  return axios
    .get('/testing')
    .then(response => response.data)
    .then(data => dispatch(recieveGrants(data)))
    .catch(error => dispatch(errorFetchingData(error)));
};

export const startFetchGrants = () => ({
  action: FETCH_BEGIN
});

export const recieveGrants = data => ({
  action: FETCH_DATA_SUCCESS,
  payload: data
});

export const errorFetchingData = error => ({
  action: FETCH_DATA_FAILURE,
  payload: error.message
});
