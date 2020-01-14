const axios = require('axios');

const sortById = (a, b) => a.id - b.id;

exports.getAll = async () => {
  const response = await axios.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json');
  const { players } = response.data;

  return players.sort(sortById);
};

exports.getById = async (id) => {
  const response = await axios.get('https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json');
  const { players } = response.data;

  return players.find(player => player.id === id);
};
