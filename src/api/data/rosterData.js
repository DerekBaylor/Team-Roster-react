import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getRoster = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/players.json?`)
  // .get(`${baseURL}/players.json?orderBy="uid"&equalTo="${userId}"`)
    .then((playerArray) => resolve(playerArray))
    .catch(reject);
});

const addPlayer = (playerObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/players.json`, playerObj)
    .then((response) => {
      axios
        .patch(`${baseURL}/players/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => getRoster(false).then(resolve));
    })
    .catch(reject);
});

const updatePlayer = (playerObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/players/${playerObj.firebaseKey}.json`, playerObj)
    .then(() => getRoster(false).then(resolve))
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/players/${firebaseKey}.json`)
    .then(() => getRoster().then(resolve))
    .catch(reject);
});

export {
  getRoster, deletePlayer, addPlayer, updatePlayer,
};
