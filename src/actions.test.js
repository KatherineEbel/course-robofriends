import {
  setSearchField,
  requestRobots
} from './actions';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './actionTypes';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
  expect(setSearchField(text)).toEqual(expectedAction);
});

it('should handle requestRobots', () => {
  const store = mockStore();
  store.dispatch(requestRobots());
  const actions = store.getActions();
  console.log('action', action);
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  expect(actions[0]).toEqual(expectedAction)
});