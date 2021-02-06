import { QuotesActions, QuotesActionTypes, QuotesState } from './types';

const fetchQuote = (quoteInformation: QuotesState): QuotesActionTypes => ({
  type: QuotesActions.FETCH_QUOTE,
  payload: quoteInformation,
});

const clearQuote = (): QuotesActionTypes => ({
  type: QuotesActions.CLEAR_QUOTE,
});

export { fetchQuote, clearQuote };
