import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Signin';
import SignUp from '~/pages/Signup';

import Feed from '~/pages/Feed';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/register" component={SignUp}></Route>

      <Route path="/feed" component={Feed} isPrivate></Route>
      <Route path="/profile/:username" component={Profile} isPrivate></Route>

      <Route path="/" component={() => <h1>404</h1>}></Route>
    </Switch>
  );
}
