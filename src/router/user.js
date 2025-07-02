const express=require("express")
const User = require("../model/User.model")
const { signup } = require("../controller/auth.controller")





const router=express.Router()


router.get("/login",(req,res)=>{
    

res.send("Login accepted")
})


router.post("/signup",signup)


module.exports=router

