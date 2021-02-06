import { combineReducers } from 'redux';
import { QuotesState, QuotesActionTypes, QuotesActions } from './types';

const initialState: QuotesState = {
  author: '',
  quote: '',
};

const quotesReducer = (state = initialState, action: QuotesActionTypes) => {
  switch (action.type) {
    case QuotesActions.FETCH_QUOTE:
      return { ...state, author: action.payload.author, quote: action.payload.quote };
    case QuotesActions.CLEAR_QUOTE:
      return { ...state, author: '', quote: '' };
    default:
      return state;
  }
};

const reducer = combineReducers({
  quotes: quotesReducer,
});

export default reducer;
