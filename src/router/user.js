const express=require("express")





const router=express().router


router.get("/login",(req,res)=>{
res.send("Login accepted")
})


router.post("/signup",(req,res)=>{
res.send("Login accepted")
})


module.exports=router

