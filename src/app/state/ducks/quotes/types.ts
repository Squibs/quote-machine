/* --------------------------- quotes state shape --------------------------- */

export type QuotesState = {
  author: string;
  quote: string;
};

/* ------------------------- quotes constant strings ------------------------ */

export enum QuotesActions {
  FETCH_QUOTE = 'quotes/FETCH_QUOTE',
  CLEAR_QUOTE = 'quotes/CLEAR_QUOTE',
}

/* --------------------------- quotes action types -------------------------- */

interface FetchQuoteAction {
  type: typeof QuotesActions.FETCH_QUOTE;
  payload: QuotesState;
}

interface ClearQuoteAction {
  type: typeof QuotesActions.CLEAR_QUOTE;
}

export type QuotesActionTypes = FetchQuoteAction | ClearQuoteAction;
