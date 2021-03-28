import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { setUsername } from '../../store/actions/user.action';
import { TextField, Button } from '../../components';
import { Container, CardContainer, CardTop, CardMiddle, CardBottom } from './styles';
import { locale } from '../../constants';
import { setLanguage } from '../../store/actions/config.action';

const LoginLayout = ({ navigateToHome }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { language } = useSelector(({ config }) => ({ language: config.language }));
  const strings = locale(language);
  console.log({ language });
  const [error, setError] = useState({
    password: false,
  });
  let textFieldUser = null;
  let textFieldPass = null;

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      name: textFieldUser.getValue(),
      password: textFieldPass.getValue(),
    };

    if (user.password === '123456') {
      dispatch(setUsername(user.name));
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
          <Typography variant="caption">
            {strings.login.info} <strong>123456</strong>
          </Typography>
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
          <Button type="submit" width="100%" text={strings.login.login} onClick={handleLogin} />
        </CardBottom>
      </CardContainer>
    </Container>
  );
};

export default LoginLayout;
