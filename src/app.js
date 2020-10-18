import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import GlobalStyles from './global-styles';
import logo from './logo.svg';
// Pages
import HomePage from './pages/home';
import LoginPage from './pages/login';
import PostPage from './pages/post';
// Components
import Navbar from './containers/navbar-layout';
import { palette as colors } from './constants';

const App = ({ darkMode }) => {
  const theme = responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: colors.primary,
        },
        secondary: {
          main: colors.secondary,
        },
      },
    })
  );

  return (
    <>
      <GlobalStyles theme={theme} />
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar logo={logo} /* onBack={} */ />
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route path="/post/:postId">
              <PostPage />
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

const mapStateToProps = ({ config }) => {
  return {
    darkMode: config.darkMode,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
