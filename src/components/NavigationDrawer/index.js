import React from 'react';
import PropTypes from 'prop-types';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

const NavigationDrawer = ({ username, isShowing, onLogout, onClose, darkMode, changeThemeMode }) => {
  const strings = locale();
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
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={strings.drawer.logout} onClick={onLogout} />
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
