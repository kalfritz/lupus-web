import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Signin';
import SignUp from '~/pages/Signup';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/" exact component={Home} isPrivate />
      <Route path="/saved" component={Home} isPrivate />
      <Route path="/settings" component={Home} isPrivate />
      <Route path="/blocks" component={Home} isPrivate />
      <Route path="/sent" component={Home} isPrivate />
      <Route path="/:username" component={Profile} isPrivate />

      <Route path="/" component={Home} />
    </Switch>
  );
}
