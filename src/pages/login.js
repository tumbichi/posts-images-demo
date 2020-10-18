import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginContainer from '../containers/login-layout';

const LoginPage = ({ username }) => {
  let history = useHistory();

  useEffect(() => {
    if (username) {
      goToHome();
    }
  }, [username]);

  const goToHome = () => {
    history.push('home');
  };

  return (
    <>
      <LoginContainer navigateToHome={goToHome} />
    </>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    username: user.name,
  };
};

export default connect(mapStateToProps)(LoginPage);
