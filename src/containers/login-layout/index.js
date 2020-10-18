import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { setUsername } from '../../store/actions/user.action';
import { Container, CardContainer, CardTop, CardMiddle, CardBottom } from './styles';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { locale } from '../../constants';

const LoginLayout = ({ username, setUsername, navigateToHome }) => {
  const theme = useTheme();
  const strings = locale();
  const [error, setError] = useState({
    password: false,
  });
  let textFieldUser = null;
  let textFieldPass = null;

  const handleLogin = () => {
    const user = {
      name: textFieldUser.getValue(),
      password: textFieldPass.getValue(),
    };

    if (user.password === '123456') {
      setUsername(user.name);
      navigateToHome();
    } else {
      setError({
        password: true,
      });
    }
  };

  const handleClickPassword = () => {
    if (error.password) {
      setError({
        password: false,
      });
    }
  };

  return (
    <Container theme={theme}>
      <CardContainer width="100%" theme={theme} elevation={3}>
        <CardTop>
          <Typography variant="h4">{strings.login.login}</Typography>
        </CardTop>
        <CardMiddle>
          <TextField
            ref={(ref) => {
              textFieldUser = ref;
            }}
            width="100%"
            label={strings.login.user}
          />
          <TextField
            error={error.password}
            ref={(ref) => {
              textFieldPass = ref;
            }}
            width="100%"
            type="password"
            helperText={strings.login.invalid_password}
            label={strings.login.password}
            onClick={handleClickPassword}
          />
        </CardMiddle>
        <CardBottom>
          <Button width="100%" text={strings.login.login} onClick={handleLogin} />
        </CardBottom>
      </CardContainer>
    </Container>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    username: user.name,
  };
};

const mapDispatchToProps = {
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
