const playersService = require('../services/players');

exports.getAll = (req, res) => {
  const players = playersService.getAll();
  res.status(200).json(players);
};

exports.getById = (req, res) => {
  const playerId = parseInt(req.params.id, 10);
  const player = playersService.getById(playerId);

  if (!player) {
    res.status(404).end();
  }
  res.status(200).json(player);
};
