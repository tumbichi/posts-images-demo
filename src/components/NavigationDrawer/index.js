import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { languageToString } from '../../utils';
import { locale } from '../../constants';
import {
  Drawer,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from './styles';

const NavigationDrawer = ({
  changeLanguage,
  changeThemeMode,
  darkMode,
  isShowing,
  language,
  onClose,
  onLogout,
  username,
}) => {
  const strings = locale(language);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Drawer
      open={isShowing}
      variant="temporary"
      ModalProps={{
        onClose,
      }}
    >
      <Divider />
      <List subheader={<ListSubheader>{`¡${strings.drawer.hello} ${username}!`}</ListSubheader>} />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <WbIncandescentIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary={strings.drawer.darkMode} />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              checked={darkMode}
              onChange={changeThemeMode}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GTranslateIcon />
          </ListItemIcon>

          <Menu id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem name="es" selected={language === 'es'} onClick={changeLanguage}>
              <span role="img" aria-label="spain-flag">
                🇪🇸
              </span>
              {strings.languages.es}
            </MenuItem>
            <MenuItem name="en" selected={language === 'en'} onClick={changeLanguage}>
              <span role="img" aria-label="usa-flag">
                🇺🇸
              </span>
              {strings.languages.en}
            </MenuItem>
          </Menu>
          <ListItemText id="switch-list-label-wifi" primary={languageToString(language)} />
          <ListItemSecondaryAction button>
            <IconButton onClick={handleClick}>
              <ArrowDropDownIcon />
            </IconButton>
          </ListItemSecondaryAction>
          {/* 
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
              checked={language === 'en'}
              onChange={changeLanguage}
            />
          </ListItemSecondaryAction> */}
        </ListItem>
        <ListItem button onClick={onLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={strings.drawer.logout} />
        </ListItem>
      </List>
    </Drawer>
  );
};

NavigationDrawer.defaultProps = {
  username: '',
  isShowing: false,
  darkMode: false,
  onLogout: () => {},
  onClose: () => {},
  changeThemeMode: () => {},
};

NavigationDrawer.propTypes = {
  username: PropTypes.string,
  isShowing: PropTypes.bool,
  darkMode: PropTypes.bool,
  onLogout: PropTypes.func,
  onClose: PropTypes.func,
  changeThemeMode: PropTypes.func,
};

export default NavigationDrawer;
