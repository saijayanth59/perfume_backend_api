const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  gmail: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  }
}, { _id: false });

const sizeSchema = new mongoose.Schema({
  size: { type: String, required: true },
  price: { type: Number, required: true }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  sizes: { type: [sizeSchema], required: true },
  images: { type: [String], required: true },
  category: { type: String, required: true, enum: ["men", "women", "unisex"] },
  featured: { type: Boolean, default: false },
  new: { type: Boolean, default: false },
  ratings: [RatingSchema],
  avgRating: {
    type: Number,
    default: 0,
  },
  numRatings: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

