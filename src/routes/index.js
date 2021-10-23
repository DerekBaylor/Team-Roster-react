import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';
import AddPlayer from '../views/AddPlayer';

export default function Routes({ setEditItem }) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home setEditItem={setEditItem} />}
        />
        <Route
          exact
          path="/team"
          component={() => <Team setEditItem={setEditItem} />}
        />
        <Route exact path="/addPlayer" component={AddPlayer} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  setEditItem: PropTypes.func.isRequired,
};
