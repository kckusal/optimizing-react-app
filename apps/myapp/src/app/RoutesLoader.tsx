import { lazy, Suspense } from 'React'
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() =>import('./pages/Home'));
const Contact = lazy(() =>import('./pages/Contact'));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
