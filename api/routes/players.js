const express = require('express');
const playersController = require('../controllers/players');

const router = express.Router();

router.route('/players')
  .get(playersController.getAll);

module.exports = router;
