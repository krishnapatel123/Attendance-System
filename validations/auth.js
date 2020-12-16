const Joi = require('joi');

exports.signup = {
  body: Joi.object({
    fullName    : Joi.string().required().max(40).trim(),
    DOB         : Joi.date().iso(),
    gender      : Joi.string().max(6).required(),
    address     : Joi.string().required(),
    email       : Joi.string().email().required().trim().lowercase(),
    password  : Joi.string().required().min(8).max(32).trim(),
    contact_no  : Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    emergency_contact_no : Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    designation : Joi.string().required(),
    maximum_qualification : Joi.string().required(),
    university  : Joi.string().required(),      
    technology  : Joi.string().required(),       
    vehical_no  : Joi.string(),      
  })
}

exports.login = {
  body: Joi.object({
    email     : Joi.string().email().required().trim().lowercase(),
    password  : Joi.string().required().max(128).trim(),
  })
}
