import { FETCH_CHEESES_ERROR, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_REQUEST } from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case FETCH_CHEESES_REQUEST: {
      console.log('fetch cheeses request');
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case FETCH_CHEESES_SUCCESS: {
      return {
        ...state,
        cheeses: action.cheeses,
        loading: false
      };
    }
    case FETCH_CHEESES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}