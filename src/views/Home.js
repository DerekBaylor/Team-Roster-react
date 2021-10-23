import React, { useEffect, useState } from 'react';
import { getRoster } from '../api/data/rosterData';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getRoster().then(setPlayers);
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      {players.map((player) => (
        <h1 key={player.firebaseKey}>{player.fullName}</h1>
      ))}
    </>
  );
}

// import React from 'react';

// export default function Home() {
//   return (
//     <h1>Home Page</h1>
//   );
// }
