const playersService = require('../services/players');

exports.getAll = async (req, res) => {
  const players = await playersService.getAll();
  res.status(200).json(players);
};

exports.getById = async (req, res) => {
  const playerId = parseInt(req.params.id, 10);
  if (Number.isNaN(playerId)) {
    res.status(400).end();
    return;
  }

  const player = await playersService.getById(playerId);

  if (!player) {
    res.status(404).end();
    return;
  }

  res.status(200).json(player);
};
