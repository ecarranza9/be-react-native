const mongoose = require('mongoose');

const addressSchema = mongoose.Schema(
  {
    cp: {
      type: String,
      required: true
    },
    barrio: {
      type: String,
      required: true
    },
    localidad: {
      type: String,
      required: true
    }
  }, { timestamp: true }
);

module.exports = mongoose.model('Address', addressSchema);