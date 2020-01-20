import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/register" component={LoginContainer} />
      <Route exact path="/remember" component={LoginContainer} />
      <Route exact path="/home" component={HomeContainer} isPrivate /> 
      <Route exact path="/profile" component={HomeContainer} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={LoginContainer} />
    </Switch>
  );
}

export default Routes;