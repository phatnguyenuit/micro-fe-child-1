import React, { useState } from 'react';
import clsx from 'clsx';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import theme from 'theme';
import Routes from 'routes';
import Sidebar, { SidebarContext } from 'components/Sidebar';

import Topbar from 'components/Topbar';

import useStyles from './App.styles';
import pkg from '../package.json';

function App({ basename = '', noTopbar = false }: AppProps) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const hanldeToggleDrawer = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={basename}>
          <div className={classes.root}>
            <SidebarContext.Provider value={{ open, hanldeToggleDrawer }}>
              {!noTopbar && <Topbar />}
              <Sidebar />
            </SidebarContext.Provider>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              {!noTopbar && <div className={classes.drawerHeader} />}
              <div>
                <span>
                  You are on <code>{pkg.name}</code>!
                </span>
              </div>
              <Routes />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;

export interface AppProps {
  basename?: string;
  noTopbar?: boolean;
}
