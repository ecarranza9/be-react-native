const Joi = require('joi');

const addressSchema = Joi.object({
  cp: Joi.number()
    .min(0),
  barrio: Joi.string()
    .min(1)
    .max(30),
  localidad: Joi.string()
    .min(1)
    .max(30),
});

const idSchema = Joi.object().keys({
  id: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
});

module.exports = {
  addressSchema,
  idSchema,
};
