const express=require("express")
const userROuter=require("./router/user")

const app=express()

const port =5000



app.use(userROuter)
app.listen(port,()=>{
console.log(`server listing at port ${port}`)
})
