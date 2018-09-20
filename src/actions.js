import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './actionTypes';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: robots}))
    .catch(error => dispatch(() => dispatch({type: REQUEST_ROBOTS_FAIL, payload: error})));
};