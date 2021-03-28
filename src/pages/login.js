import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginContainer from '../features/login-layout';

const LoginPage = () => {
  const history = useHistory();
  const { username } = useSelector(({ user }) => ({
    username: user.name,
  }));

  const goToHome = () => {
    history.push('home');
  };

  useEffect(() => {
    if (username) {
      goToHome();
    }
  }, [username]);

  return (
    <>
      <LoginContainer navigateToHome={goToHome} />
    </>
  );
};

export default LoginPage;
