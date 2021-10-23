import React from 'react';
import PropTypes from 'prop-types';
import { deletePlayer, updatePlayer } from '../api/data/rosterData';

export default function Roster({ player, setPlayer, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayer);
    } else {
      updatePlayer({ ...player, retired: true }).then(setPlayer);
    }
  };

  return (
    <>
      {player.retired ? (
        <button className="btn btn-success" type="button" disabled>
          <i className="fas fa-check-circle fa-2x" />
        </button>
      ) : (
        <button
          onClick={() => handleClick('retire')}
          className="btn btn-success"
          type="button"
        >
          Retire
        </button>
      )}
      <h5>{player.name}</h5>
      <div>
        {!player.retired && (
          <button
            onClick={() => setEditItem(player)}
            className="btn btn-info"
            type="button"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}
Roster.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    retired: PropTypes.bool,
    position: PropTypes.string,
    hometown: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditItem: PropTypes.func,
};

Roster.defaultProps = {
  setEditItem: () => {},
};
