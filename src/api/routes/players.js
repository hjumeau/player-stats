const express = require('express');
const playersController = require('../controllers/players');

const router = express.Router();

router.route('/players')
  .get(playersController.getAll);

router.route('/players/:id')
  .get(playersController.getById);

module.exports = router;
