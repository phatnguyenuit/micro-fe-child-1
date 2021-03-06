import React, { memo, useContext, createContext } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { Home as HomeIcon, Label as LabelIcon } from '@material-ui/icons';

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
        <RouterLink to={'/'} className={classes.navigationLink}>
          <HomeIcon />
        </RouterLink>
      </div>
      <Divider />
      <List>
        {ROUTES.map(({ path, name }) => (
          <RouterLink
            to={path}
            key={`${name}-link`}
            className={classes.navigationLink}
          >
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
