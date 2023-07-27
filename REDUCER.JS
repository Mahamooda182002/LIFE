import { REGISTER_DONOR, SEARCH_DONORS } from '../actions/types';

const initialState = {
  donors: [],
  searchResults: [],
};

const donorReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DONOR:
      return {
        ...state,
        donors: [...state.donors, action.payload],
      };
    case SEARCH_DONORS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default donorReducer;
