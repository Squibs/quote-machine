import { FETCH_QUOTE, CLEAR_QUOTE } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return action.payload.data;
    case CLEAR_QUOTE:
      return [];
    default:
      return state;
  }
}
