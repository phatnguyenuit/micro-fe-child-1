import React, { memo, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import pkg from '../../package.json';

export const ROUTES = [
  {
    name: 'Page 1',
    component: lazy(() => import('pages/Page1')),
    path: '/page1',
  },
  {
    name: 'Page 2',
    component: lazy(() => import('pages/Page2')),
    path: '/page2',
  },
];
export const RoutesComponent: React.FC = () => (
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
);

const Routes = memo(RoutesComponent);
Routes.displayName = 'Routes';

export default Routes;
