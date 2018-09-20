import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './actionTypes';

const initialSearchState = {
  searchValue: '',
};

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchValue: action.payload };
    default: return state;
  }
};

const initialRequestRobotState = {
  robots: [],
  isPending: false,
  error: null
};

export const requestRobots = (state = initialRequestRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAIL:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};