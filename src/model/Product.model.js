// models/User.js

const { required } = require("joi");
const mongoose = require("mongoose");

const productShema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String
    },
    price:{
        type:Number,
        required:ture
    }


  },
  {
    timestamps: true,
  }
);

// Create and export the model
const Product = mongoose.model("Product", productShema);
module.exports = Product;
