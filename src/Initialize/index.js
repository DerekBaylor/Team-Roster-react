import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';
import { getRoster } from '../api/data/rosterData';
import RosterForm from '../Components/RosterForm';

function Initialize() {
  const [user, setUser] = useState(null);
  const [roster, setRoster] = useState({});
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          userId: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });

    getRoster().then(setRoster);
  }, []);

  return (
    <Container>
      {user ? (
        <>
          <Navigation />
          <h1>Welcome to the Shuster Roster!</h1>
          <RosterForm
            obj={editItem}
            setRoster={setRoster}
            setEditItem={setEditItem}
          />
          <Routes
            roster={roster}
            setRoster={setRoster}
            setEditItem={setEditItem}
          />
        </>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}

export default Initialize;
