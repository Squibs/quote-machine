import type { AppThunk } from '../../store';
import { axiosApiRequest } from '../../utils';
import * as actions from './actions';

/* -------------------------- quotes thunk actions -------------------------- */

const fetchQuote = (): AppThunk => async (dispatch) => {
  const response = await axiosApiRequest.get(
    `/posts/?orderby=rand&per_page=1&timestamp=${new Date().getTime()}`,
  );

  const formattedData = {
    author: response.data[0].title.rendered,
    quote: response.data[0].content.rendered,
  };

  dispatch(actions.fetchQuote(formattedData));
};

/* -------------------------- quotes simple actions ------------------------- */

const { clearQuote } = actions;

export { clearQuote, fetchQuote };
