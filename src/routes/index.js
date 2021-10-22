import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Team from '../views/Team';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Team} />
      </Switch>
    </>
  );
}
