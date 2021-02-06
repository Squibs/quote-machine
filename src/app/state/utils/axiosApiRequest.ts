import axios from 'axios';

const axiosApiRequest = axios.create({
  baseURL: 'https://quotesondesign.com/wp-json/wp/v2',
});

export default axiosApiRequest;

// https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1
