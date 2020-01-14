const axios = require('axios');

const sortById = (a, b) => a.id - b.id;

const getPlayers = () => axios.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json');

exports.getAll = async () => {
  const response = await getPlayers();
  const { players } = response.data;

  return players.sort(sortById);
};

exports.getById = async (id) => {
  const response = await getPlayers();
  const { players } = response.data;

  return players.find((player) => player.id === id);
};
