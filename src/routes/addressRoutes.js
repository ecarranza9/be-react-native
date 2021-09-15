const express = require('express');
const addressController = require('../controllers/addressControllers');
const { validateParam } = require('../utils/validations');
const schemas = require('../utils/validationSchemas');

const router = express.Router();

router
  .get(
    '/:cp',
    validateParam(schemas.addressSchema, 'cp'),
    addressController.getAddressByCp,
  )
  .post('/', validateBody(schemas.addressSchema),
    addressController.postCp
  )
  .get('/', addressController.getAllCps)

module.exports = router;
