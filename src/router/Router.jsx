import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routes';

const Router = () => (
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
);

export default Router;
