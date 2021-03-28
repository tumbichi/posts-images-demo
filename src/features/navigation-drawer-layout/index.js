import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { collapseDrawer, changeTheme, setLanguage } from '../../store/actions/config.action';
import { logout } from '../../store/actions/user.action';

import { Container } from './style';
import NavigationDrawer from '../../components/NavigationDrawer';

const NavigationDrawerLayout = () => {
  const dispatch = useDispatch();
  const { username, isShowing, darkMode, language } = useSelector(({ user, config }) => {
    return {
      username: user.name,
      isShowing: !config.drawerCollapse,
      darkMode: config.darkMode,
      language: config.language,
    };
  });

  const handleChangeLanguage = (event) => {
    dispatch(setLanguage(event.target.getAttribute('name')));
  };

  const handleLogout = () => {
    dispatch(collapseDrawer(true));
    dispatch(logout());
  };

  return (
    <Container>
      <NavigationDrawer
        changeLanguage={handleChangeLanguage}
        changeThemeMode={() => {
          dispatch(changeTheme());
        }}
        darkMode={darkMode}
        isShowing={isShowing}
        language={language}
        onClose={() => {
          dispatch(collapseDrawer(true));
        }}
        onLogout={handleLogout}
        username={username}
      />
    </Container>
  );
};

export default NavigationDrawerLayout;
