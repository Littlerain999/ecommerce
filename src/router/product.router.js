const express=require("express")
const { isAuthenticated } = require("../middleware/auth")
const { createProudct, getProducts } = require("../controller/product.controller")
const router=express.Router()


router.post("/create",isAuthenticated,createProudct)
router.get("/getproduct",getProducts)








module.exports=router

