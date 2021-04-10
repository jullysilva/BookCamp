import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Home';
import Books from '../pages/Book';

import Route from './router';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Books" exact component={Books} isPrivate={true} />
    </Switch>
  );
}