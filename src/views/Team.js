import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { deletePlayer, getRoster } from '../api/data/rosterData';

export default function Team() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getRoster().then(setPlayers);
  }, []);

  const handleClick = (key) => {
    deletePlayer(key).then(setPlayers);
  };

  return (
    <div>
      {players.map((player) => (
        <div
          key={player.firebaseKey}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          {player.fullName}
          <button
            onClick={() => handleClick(player.firebaseKey)}
            className="btn btn-danger"
            type="button"
          >
            Retire
          </button>
        </div>
      ))}
    </div>
  );
}

Team.prototypes = {
  // players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
};
