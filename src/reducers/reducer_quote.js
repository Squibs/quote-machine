import { FETCH_QUOTE } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_QUOTE:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
