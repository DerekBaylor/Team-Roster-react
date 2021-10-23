import React, { useEffect, useState } from 'react';
import { getRoster } from '../api/data/rosterData';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getRoster().then(setPlayers);
  }, []);

  useEffect(() => {
    console.warn(players);
  }, [players]);

  return (
    <>
      <h1>Home Page</h1>
      {players.map((player) => (
        <h1 key={player.firebaseKey}>{player.fullName}</h1>
      ))}
    </>
  );
}
