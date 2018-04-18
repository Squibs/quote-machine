import axios from 'axios';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const CLEAR_QUOTE = 'CLEAR_QUOTE';

export function fetchQuote() {
  const request = axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');

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
