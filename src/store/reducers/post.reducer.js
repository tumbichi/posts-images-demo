import { TYPE_SET_PAGE_OF_POST, TYPE_INCREMENT_PAGE } from '../actions/post.actions';

const initialState = {
  posts: [],
  lastPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_PAGE_OF_POST:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };
    case TYPE_INCREMENT_PAGE:
      return {
        ...state,
        lastPage: payload,
      };
    default:
      return state;
  }
};

export default reducer;
