import axios from 'axios';
import { API_URL, QUERY_PARAMS } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const getPosts = async (pageNum, limit) => {
  const response = await axios.get(`${API_URL}?${QUERY_PARAMS.page + pageNum}&${QUERY_PARAMS.limit + (limit || 15)}`);
  return response.data;
};
