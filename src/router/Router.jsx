import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from '../components/Spinner';
import routes from './routes';

const Router = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Router;
