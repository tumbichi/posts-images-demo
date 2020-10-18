import React from 'react';
import { connect } from 'react-redux';
import { collapseDrawer, changeTheme } from '../../store/actions/config.action';
import { logout } from '../../store/actions/user.action';

import { Container } from './style';
import NavigationDrawer from '../../components/NavigationDrawer';

const NavigationDrawerLayout = ({ username, isShowing, darkMode, collapseDrawer, changeTheme, logout }) => {
  const handleLogout = () => {
    collapseDrawer(true);
    logout();
  };

  return (
    <>
      <Container>
        <NavigationDrawer
          username={username}
          isShowing={isShowing}
          onClose={() => {
            collapseDrawer(true);
          }}
          darkMode={darkMode}
          changeThemeMode={() => {
            changeTheme();
          }}
          onLogout={handleLogout}
        />
      </Container>
    </>
  );
};

const mapStateToProps = ({ user, config }) => {
  return {
    username: user.name,
    isShowing: !config.drawerCollapse,
    darkMode: config.darkMode,
  };
};

const mapDispatchToProps = {
  collapseDrawer,
  changeTheme,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawerLayout);
