import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { addPlayer, updatePlayer } from '../api/data/rosterData';

const initialState = {
  name: '',
  hometown: '',
  position: '',
  retired: false,
  uid: '',
};

export default function RosterForm({ obj, setRoster, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.fullname,
        hometown: obj.hometown,
        position: obj.position,
        retired: obj.retired,
        uid: obj.uid,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput).then((roster) => {
        setRoster(roster);
        resetForm();
      });
    } else {
      addPlayer({ ...formInput }).then((roster) => {
        setRoster(roster);
        resetForm();
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control form-control-lg me-3"
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Add a player."
            required
          />
          <button className="btn btn-success" type="submit">
            {obj.firebaseKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

RosterForm.propTypes = {
  obj: PropTypes.shape({
    fullname: PropTypes.string,
    retired: PropTypes.bool,
    hometown: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  setRoster: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

RosterForm.defaultProps = {
  obj: {},
};
