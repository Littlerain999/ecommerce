const { required } = require("joi");
const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required:true
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
