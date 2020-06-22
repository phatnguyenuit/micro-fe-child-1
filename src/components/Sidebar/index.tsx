import React, { memo, useContext, createContext } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LabelIcon from '@material-ui/icons/Label';

import { ROUTES } from 'routes';
import useStyles from './styles';

export const drawerWidth = 240;

export interface SidebarContextValues {
  open: boolean;
  hanldeToggleDrawer?: () => void;
}

export const SidebarContext = createContext<SidebarContextValues>({
  open: true,
});

export const SidebarComponent: React.FC = () => {
  const classes = useStyles();
  const { open } = useContext(SidebarContext);
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <RouterLink to={'/'}>Home</RouterLink>
      </div>
      <Divider />
      <List>
        {ROUTES.map(({ path, name }) => (
          <RouterLink to={path} key={`${name}-link`}>
            <ListItem button>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </RouterLink>
        ))}
      </List>
    </Drawer>
  );
};

const Sidebar = memo(SidebarComponent);
Sidebar.displayName = 'Sidebar';

export default Sidebar;
