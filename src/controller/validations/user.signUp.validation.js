const Joi = require("joi");

module.exports = Joi.object({
    username: Joi.string().min(5).required().messages({
        "string.empty": "username is requried",
        "any.required": "username is required",
        "string.min": "username must be of atleast '5' characters",
    }),

    email: Joi.string().required().email().messages({
        "string.empty": "email is required",
        "any.required": "email is required",
        "string.email": "email must be valid"
    }),

    password: Joi.string().min(8).required().messages({
        "string.empty": "password is required",
        "string.min": "password must atleast be of '8' characters",
        "any.required": "password is required"
    }),

    role: Joi.string()
})