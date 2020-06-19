import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import pkg from '../package.json';

if (!document.getElementById(`${pkg.name}-container`)) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

const win = window as Record<string, any>;
win[pkg.name] = {
  render: (containerId: string, basename?: string) => {
    ReactDOM.render(
      <React.StrictMode>
        <App basename={basename} />
      </React.StrictMode>,
      document.getElementById(containerId)
    );
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
