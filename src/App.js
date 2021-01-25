import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ZonesPage from './components/ZonesPage';
import NotFound from './components/404';

function App() {
  return (
    <Switch>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/zones" component={ZonesPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Switch>
  );
}
export default App;
