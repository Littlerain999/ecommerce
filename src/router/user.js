const express=require("express")
const User = require("../model/User.model")
const { signup, login } = require("../controller/auth.controller")





const router=express.Router()


router.post("/login",login)


router.post("/signup",signup)


module.exports=router

