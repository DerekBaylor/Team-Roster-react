// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { deletePlayer, getRoster } from '../api/data/rosterData';

// export default function Team() {
//   const [roster, setRoster] = useState([]);

//   useEffect(() => {
//     getRoster().then(setRoster);
//   }, []);

//   const handleClick = (key) => {
//     deletePlayer(key).then(setRoster);
//   };

//   return (
//     <div>
//       {roster.map((players) => (
//         <div
//           key={players.firebaseKey}
//           className="d-flex justify-content-between alert alert-light"
//           role="alert"
//         >
//           {players.fullName}
//           <button
//             onClick={() => handleClick(players.firebaseKey)}
//             className="btn btn-danger"
//             type="button"
//           >
//             Retire
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// Team.prototypes = {
//   // players: PropTypes.arrayOf(PropTypes.object).isRequired,
//   setRoster: PropTypes.func.isRequired,
// };
import React from 'react';

export default function Team() {
  return <h1>Team Page</h1>;
}
