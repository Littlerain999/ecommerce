const { default: mongoose } = require("mongoose");
const Product = require("../model/Product.model");

const createProudct = async (req, res) => {
  try {
const data=req.body

data.createdBy=new mongoose.Types.ObjectId(req.user._id)
// validate using joi
const product=await Product.create(data)
res.status(200).send(product)

  } catch (err) {

    console.log(err)
  }
};


const getProducts=async(req,res)=>{
    const product=await Product.find().populate("createdBy",{password:0}

    )
    res.status(200).send(product)
}


module.exports={
    createProudct,
    getProducts
}