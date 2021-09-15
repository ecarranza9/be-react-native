const express = require('express');
const addressRoutes = require('./addressRoutes');

const router = express.Router();

router
  .use('/address', addressRoutes);

module.exports = router;