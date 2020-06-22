import React from 'react';
import ReactDOM from 'react-dom';

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import './index.css';
import App, { AppProps } from './App';

import * as serviceWorker from './serviceWorker';
import pkg from '../package.json';

const generateClassName = createGenerateClassName({
  seed: 'child-1',
});

const renderApp = (containerId: string, props?: Partial<AppProps>) => {
  ReactDOM.render(
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <App {...props} />
      </StylesProvider>
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

if (!document.getElementById(`${pkg.name}-container`)) {
  renderApp('root');
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

const win = window as Record<string, any>;
win[pkg.name] = {
  render: (containerId: string, basename?: string) => {
    renderApp(containerId, { basename, noTopbar: true });
    serviceWorker.unregister();
  },
  unmount: (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
    }
  },
};

// Change webpack chunk path with full path
declare let __webpack_public_path__: string | undefined;
__webpack_public_path__ = process.env.REACT_APP_PUBLIC_URL;
