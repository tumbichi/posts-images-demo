export const TYPE_COLLAPSE_DRAWER = 'COLLAPSE_DRAWER';
export const TYPE_CHANGE_THEME_MODE = 'CHANGE_THEME_MODE';
export const TYPE_ON_PAGE_POST = 'CHANGE_ON_PAGE_POST';

export const collapseDrawer = (collapsed) => {
  return {
    type: TYPE_COLLAPSE_DRAWER,
    payload: collapsed,
  };
};

export const changeTheme = () => {
  return {
    type: TYPE_CHANGE_THEME_MODE,
  };
};

export const changeOnPagePost = (onPagePost) => {
  return {
    type: TYPE_ON_PAGE_POST,
    payload: onPagePost,
  };
};
