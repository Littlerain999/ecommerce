const express=require("express")
const userROuter=require("./router/user")
const connectDB = require("./config/database")

const app=express()
app.use(express.json())
const port =5000

app.get("/",(req,res)=>{
res.send("server running")
})

connectDB()
app.use(userROuter)
app.listen(port,()=>{

console.log(`server listing at port ${port}`)
})
