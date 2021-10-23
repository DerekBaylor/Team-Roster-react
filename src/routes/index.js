import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';
import AddPlayer from '../views/AddPlayer';

export default function Routes({ roster, setRoster, setEditItem }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/team"
          component={() => (
            <Team
              roster={roster}
              setRoster={setRoster}
              setEditItem={setEditItem}
            />
          )}
        />
        <Route exact path="/addPlayer" component={AddPlayer} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  roster: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
