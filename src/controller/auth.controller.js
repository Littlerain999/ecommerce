const Joi = require("joi");
const User = require("../model/User.model");

const userValidationSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    "string.empty": "Username is required",
    "string.min": "Username should have at least 3 characters",
    "any.required": "Username is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  }),
});

const signup = async (req, res, next) => {
  try {
    const data = req.body;
    //validate,
    const { error, value } = userValidationSchema.validate(data);

    const user = await User.create(value);

    res.status(200).send({"message":"User Created Successfully"},user)

    // if password-  encrypt
    // store data in database
  } catch (err) {
    console.log("error ", err);
  }
};

module.exports = {
  signup,
};
