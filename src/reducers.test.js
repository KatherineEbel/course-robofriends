import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './actionTypes';

import * as reducers from './reducers';

describe('reducers', () => {
  
  describe('searchRobots', () => {
    it('should return the correct initial state', () => {
      expect(reducers.searchRobots(undefined, {})).toEqual({searchValue: ''});
    });
    
    it('should handle CHANGE_SEARCHFIELD action', () => {
      expect(reducers.searchRobots(undefined, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })).toEqual({
        searchValue: 'abc'
      })
    });
  });
  describe('requestRobots', () => {
    it('should have the correct initial state', () => {
      expect(reducers.requestRobots(undefined, {})).toEqual({
        robots: [], isPending: false, error: null
      })
    });
  
    it('should update isPending with REQUEST_ROBOTS_PENDING_ACTION', () => {
      expect(reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_PENDING
      })).toEqual({robots: [], isPending: true, error: null});
    });
    
    it('should handle REQUEST_ROBOTS_SUCCESS_ACTION', () => {
      expect(reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: 4,
          name: 'test',
          email: 'test@gmail.com'
        }]
      })).toEqual({
        robots: [{
          id: 4,
          name: 'test',
          email: 'test@gmail.com'
        }],
        error: null,
        isPending: false
      });
    });
    it('should handle REQUEST_ROBOTS_FAIL_ACTION', () => {
      expect(reducers.requestRobots(undefined, {
        type: REQUEST_ROBOTS_FAIL,
        payload: 'Noooooo!'
      })).toEqual({
        robots: [],
        error: 'Noooooo!',
        isPending: false
      });
    });
  });
});

