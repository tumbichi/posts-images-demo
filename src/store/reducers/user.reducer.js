import { TYPE_SET_USERNAME, TYPE_LOGOUT } from '../actions/user.action';

const initialState = {
  name: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_SET_USERNAME:
      return {
        ...state,
        name: payload,
      };
    case TYPE_LOGOUT:
      return {
        ...state,
        name: '',
      };
    default:
      return state;
  }
};

export default reducer;
