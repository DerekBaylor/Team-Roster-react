import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Routes from '../routes';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);
  const [editItem, setEditItem] = useState({});

  console.warn(editItem);

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
  }, []);

  return (
    <Container>
      {user ? (
        <>
          <Navigation />
          <h1>Welcome to the Shuster Roster!</h1>
          <Routes setEditItem={setEditItem} />
          {/* {
          players.map((player) => <h1>{player}</h1>)
          } */}
        </>
      ) : (
        <SignIn />
      )}
    </Container>
  );
}

export default Initialize;
