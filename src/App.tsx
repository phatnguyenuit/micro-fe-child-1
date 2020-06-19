import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import pkg from '../package.json';
import './App.css';

const ROUTES = [
  {
    name: 'Page 1',
    component: lazy(() => import('./pages/Page1')),
    path: '/page1',
  },
  {
    name: 'Page 2',
    component: lazy(() => import('./pages/Page2')),
    path: '/page2',
  },
];

function App({ basename = '' }: AppProps) {
  return (
    <BrowserRouter basename={basename}>
      <div className="root">
        <span>
          You are on <code>{pkg.name}</code>!
        </span>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          {ROUTES.map(({ name, path }) => (
            <li key={name}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Suspense fallback="Loading child page">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <span>
                  Child Home page <code>{pkg.name}</code>
                </span>
              )}
            />

            {ROUTES.map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
            <Route path="*" render={() => 'Not Found'} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

export interface AppProps {
  basename?: string;
}
