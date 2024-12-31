const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);