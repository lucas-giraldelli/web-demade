import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewEvent from '../pages/NewEvent';
import TrackEvent from '../pages/TrackEvent';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/newevent" component={NewEvent} />
    <Route path="/trackevent" component={TrackEvent} />
  </Switch>
);

export default Routes;
