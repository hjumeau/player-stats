const { players } = require('../../fixtures/players.json');

const sortById = (a, b) => a.id - b.id;

exports.getAll = () => players.sort(sortById);

exports.getById = id => players.find(player => player.id === id);
