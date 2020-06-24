import React, { memo, useContext } from 'react';
import clsx from 'clsx';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { SidebarContext } from 'components/Sidebar';

import useStyles from './styles';
import pkg from '../../../package.json';

export const TopbarComponent: React.FC = () => {
  const classes = useStyles();
  const { open, hanldeToggleDrawer } = useContext(SidebarContext);
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={hanldeToggleDrawer}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {pkg.name.toUpperCase()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const Topbar = memo(TopbarComponent);
Topbar.displayName = 'Topbar';

export default Topbar;
