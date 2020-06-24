import { createStyles, Theme, makeStyles } from '@material-ui/core';

import { drawerWidth } from 'components/Sidebar';

export const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      marginLeft: theme.spacing(2),
    },
    navigationLink: {
      textDecoration: 'none',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Sidebar' });
export default useStyles;
