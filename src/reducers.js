import { CHANGE_SEARCH_FIELD } from './actionTypes';

const initialState = {
  searchValue: '',
  robots: []
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchValue: action.payload };
    default: return state;
  }
};