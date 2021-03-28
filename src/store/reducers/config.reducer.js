import {
  TYPE_COLLAPSE_DRAWER,
  TYPE_CHANGE_THEME_MODE,
  TYPE_ON_PAGE_POST,
  TYPE_SET_LANGUAGE,
} from '../actions/config.action';

const initialState = {
  drawerCollapse: true,
  darkMode: false,
  onPagePost: false,
  language: 'es',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE_COLLAPSE_DRAWER:
      return {
        ...state,
        drawerCollapse: payload,
      };
    case TYPE_CHANGE_THEME_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case TYPE_ON_PAGE_POST:
      return {
        ...state,
        onPagePost: payload,
      };
    case TYPE_SET_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
