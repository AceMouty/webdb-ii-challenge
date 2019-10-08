const express = require('express');
const router = express.Router();
const knexConfiguration = require('../knexfile');
const knex = knexConfiguration.development;



module.exports = router;