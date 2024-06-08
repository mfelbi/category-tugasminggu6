const mongoose = require("mongoose");

const productObject = {
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  stock: { type: Number, required: true, min: 1 },
};

const productSchema = new mongoose.Schema(productObject, {
  versionKey: false, 
  timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
  productObject,
  productSchema,
};
