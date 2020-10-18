export const TYPE_SET_USERNAME = 'SET_USERNAME';
export const TYPE_LOGOUT = 'LOGOUT';

export const setUsername = (name) => {
  return {
    type: TYPE_SET_USERNAME,
    payload: name,
  };
};

export const logout = () => {
  return {
    type: TYPE_LOGOUT,
  };
};
