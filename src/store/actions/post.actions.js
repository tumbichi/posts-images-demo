import { getPosts } from '../../services/posts';
import { addThumbnailTo } from '../../utils/helpers';

export const TYPE_SET_PAGE_OF_POST = 'SET_PAGE_OF_POST';
export const TYPE_INCREMENT_PAGE = 'INCREMENT_PAGE';

export const setPageOfPosts = (posts) => {
  return {
    type: TYPE_SET_PAGE_OF_POST,
    payload: posts,
  };
};

export const incrementPage = (pageNumber) => {
  return {
    type: TYPE_INCREMENT_PAGE,
    payload: pageNumber + 1,
  };
};

export const requestPagePost = (pageNum, limit) => (dispatch) =>
  getPosts(pageNum, limit).then((posts) => {
    dispatch(setPageOfPosts(addThumbnailTo(posts)));
    if (pageNum === 1) {
      dispatch(incrementPage(2));
    } else {
      dispatch(incrementPage(pageNum));
    }
  });
