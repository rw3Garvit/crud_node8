let Joi = require("joi");

let user = {
  body: Joi.object().keys({
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
  }),
};




module.exports = { user };
