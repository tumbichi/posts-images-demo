import styled from 'styled-components';
import {
  Drawer as DrawerUI,
  Divider as DividerUI,
  List as ListUI,
  ListItem as ListItemUI,
  ListItemText as ListItemTextUI,
  ListItemIcon as ListItemIconUI,
  ListItemSecondaryAction as ListItemSecondaryActionUI,
  Switch as SwitchUI,
  ListSubheader as ListSubheaderUI,
} from '@material-ui/core';

export const Drawer = styled(DrawerUI)`
  .MuiDrawer-paper {
    width: 240px;
    flex-shrink: 0;
  }
`;

export const Divider = styled(DividerUI)``;

export const List = styled(ListUI)``;

export const ListSubheader = styled(ListSubheaderUI)``;

export const ListItem = styled(ListItemUI)``;

export const ListItemText = styled(ListItemTextUI)``;

export const ListItemIcon = styled(ListItemIconUI)``;

export const ListItemSecondaryAction = styled(ListItemSecondaryActionUI)``;

export const Switch = styled(SwitchUI)``;