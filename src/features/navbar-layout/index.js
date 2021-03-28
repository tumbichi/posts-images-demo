import React from 'react';
import { connect } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { collapseDrawer } from '../../store/actions/config.action';
import { Container, Bar, IconButtonContainer, Logo } from './styles';

function Navbar({ username, isPostView, logo, collapseDrawer }) {
  const history = useHistory();
  const theme = useTheme();

  const handleClickMenu = () => {
    collapseDrawer(false);
  };

  const renderLeftIcon = () => {
    if (username) {
      if (isPostView) {
        return (
          <IconButtonContainer
            onClick={() => {
              history.goBack();
            }}
          >
            <ArrowBackIcon />
          </IconButtonContainer>
        );
      }
      return (
        <IconButtonContainer onClick={handleClickMenu}>
          <MenuIcon />
        </IconButtonContainer>
      );
    }
    return <IconButtonContainer />;
  };

  return (
    <Container position="static" theme={theme}>
      <Bar theme={theme}>
        {renderLeftIcon()}
        <Logo src={logo} alt="logo" />
      </Bar>
    </Container>
  );
}

const mapStateToProps = ({ user, config }) => {
  return {
    username: user.name,
    isPostView: config.onPagePost,
  };
};

const mapDispatchToProps = {
  collapseDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
