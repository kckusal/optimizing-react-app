import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Contact} path="/contact" />
    </Switch>
  );
};

export default Routes;
