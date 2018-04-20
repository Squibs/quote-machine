import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const CLEAR_QUOTE = 'CLEAR_QUOTE';

export function fetchQuote() {
  const ApiUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
  const request = axios.get(`${ApiUrl}&timestamp=${new Date().getTime()}`); // timestamp to avoid response being cached

  return {
    type: FETCH_QUOTE,
    payload: request,
  };
}

export function clearQuote() {
  return {
    type: CLEAR_QUOTE,
    payload: '',
  };
}
