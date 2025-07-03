const Joi = require("joi");
const User = require("../model/User.model");
const bcrypt = require("bcrypt");
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

const loginValidationSchema = Joi.object({
  username: Joi.string().required().messages({
    "any.required": "Username is required",
  }),

  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

const signup = async (req, res, next) => {
  try {
    const data = req.body;
    //validate,
    const { error, value } = userValidationSchema.validate(data);

    

    const { password, ...rest } = value;

    const hasedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ ...rest, password: hasedPassword });

    res.status(200).send({ message: "User Created Successfully" }, user);

    // if password-  encrypt
    // store data in database
  } catch (err) {
    console.log("error ", err);
  }
};

const login = async (req, res, next) => {
  try {
    
    const {error,value}= loginValidationSchema.validate(req.body)
   const {username,password}=value
  // get from database
    const user = await User.findOne({ username });

// compare password
    const isPasswordMatched=await bcrypt.compare(password,user.password)
    
    
  if(isPasswordMatched){
    // if login sucess -create token using jwt
    // npm i jsonwebtoken

  }
  









    // send the token
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  signup,
  login,
};
