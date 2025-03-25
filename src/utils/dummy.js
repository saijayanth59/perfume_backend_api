const mongoose = require("mongoose");
const Product = require("../models/product")
const { mongoURI } = require("../config/serverConfig");
const products = [
  {
    name: "Ethereal Bloom",
    brand: "Lumière",
    description: "A captivating blend of wild jasmine, bergamot, and sandalwood, creating an aura of mystery and elegance.",
    shortDescription: "Delicate floral notes with hints of citrus and wood",
    price: 129.99,
    sizes: [
      { size: "30ml", price: 129.99 },
      { size: "50ml", price: 179.99 },
      { size: "100ml", price: 239.99 },
    ],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000",
      "https://i.pinimg.com/736x/9a/df/4e/9adf4e2e23e8406c0db3d7a06b994338.jpg",
    ],
    category: "women",
    featured: true,
    new: true,
    ratings: [
      { username: "Alice Smith", gmail: "alice@gmail.com", rating: 5 },
      { username: "John Doe", gmail: "john.doe@gmail.com", rating: 4 },
    ],
    avgRating: 4.5,
    numRatings: 2,
  },
  {
    name: "Mystic Noir",
    brand: "Elysian",
    description: "An enchanting mix of blackcurrant, vanilla, and amber, leaving a seductive and long-lasting impression.",
    shortDescription: "Fruity, spicy, and musky allure",
    price: 149.99,
    sizes: [
      { size: "30ml", price: 149.99 },
      { size: "50ml", price: 199.99 },
      { size: "100ml", price: 269.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/8f/21/be/8f21be31b54dcb27815d49054ddc65b1.jpg",
      "https://i.pinimg.com/736x/13/d0/cd/13d0cdbce896e2a5d55d758b5c86fd29.jpg",
    ],
    category: "unisex",
    featured: false,
    new: true,
    ratings: [
      { username: "David White", gmail: "david@gmail.com", rating: 5 },
      { username: "Sophia Wilson", gmail: "sophia.w@gmail.com", rating: 4.7 },
    ],
    avgRating: 4.85,
    numRatings: 2,
  },
  {
    name: "Azure Breeze",
    brand: "Celestia",
    description: "A fresh aquatic scent inspired by ocean waves, with notes of sea salt, citrus, and driftwood.",
    shortDescription: "Refreshing oceanic scent",
    price: 119.99,
    sizes: [
      { size: "30ml", price: 119.99 },
      { size: "50ml", price: 169.99 },
      { size: "100ml", price: 229.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/7d/f8/7b/7df87b13c176cea45814edcb30503d91.jpg",
      "https://i.pinimg.com/736x/89/31/29/8931298dcaff22d2dfe2487143397320.jpg",
    ],
    category: "men",
    featured: true,
    new: false,
    ratings: [
      { username: "Michael Scott", gmail: "michael@gmail.com", rating: 4 },
      { username: "Rachel Green", gmail: "rachel.green@gmail.com", rating: 5 },
    ],
    avgRating: 4.4,
    numRatings: 2,
  },
  {
    name: "Velvet Ember",
    brand: "Nocturne",
    description: "A bold blend of smoky oud, leather, and deep spices, leaving a lasting warmth.",
    shortDescription: "Smoky, leathery, and spicy",
    price: 189.99,
    sizes: [
      { size: "50ml", price: 189.99 },
      { size: "100ml", price: 259.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/d5/17/f1/d517f1b03ee13aa7db736894c26f5070.jpg",
      "https://i.pinimg.com/736x/46/ea/9f/46ea9fd1c7ca81325d3efaabe3f91718.jpg",
    ],
    category: "men",
    featured: false,
    new: true,
    ratings: [
      { username: "Jake Peralta", gmail: "jake@gmail.com", rating: 4.8 },
    ],
    avgRating: 4.8,
    numRatings: 1,
  },
  {
    name: "Rosé Allure",
    brand: "Fleur",
    description: "A charming mix of blooming roses, peony, and white musk for a timeless feminine scent.",
    shortDescription: "Floral and musky elegance",
    price: 99.99,
    sizes: [
      { size: "30ml", price: 99.99 },
      { size: "50ml", price: 149.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/a4/5a/6e/a45a6ec9551f5ddcf7923f415aad35a0.jpg",
      "https://i.pinimg.com/736x/4c/9d/05/4c9d055e68d456555ae935767f1ea0e8.jpg",
    ],
    category: "women",
    featured: true,
    new: false,
    ratings: [
      { username: "Emma Watson", gmail: "emma.w@gmail.com", rating: 4.5 },
    ],
    avgRating: 4.5,
    numRatings: 1,
  },
  {
    name: "Golden Hour",
    brand: "Solstice",
    description: "A warm, citrusy blend of mandarin, honey, and golden amber for a radiant presence.",
    shortDescription: "Citrus, honey, and warm amber",
    price: 139.99,
    sizes: [
      { size: "30ml", price: 139.99 },
      { size: "50ml", price: 189.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/44/5b/8a/445b8a2102a825d864584bcbab6f74f9.jpg",
      "https://i.pinimg.com/736x/d3/33/2c/d3332cf98dd662c17e2b2c524ce3b895.jpg",
    ],
    category: "unisex",
    featured: true,
    new: true,
    ratings: [
      { username: "Liam Hemsworth", gmail: "liam.h@gmail.com", rating: 4.7 },
    ],
    avgRating: 4.7,
    numRatings: 1,
  },
  {
    name: "Shadow Mist",
    brand: "Lunar",
    description: "A mysterious blend of black tea, vanilla bean, and smoky incense for an enigmatic aura.",
    shortDescription: "Tea, vanilla, and incense",
    price: 159.99,
    sizes: [
      { size: "50ml", price: 159.99 },
      { size: "100ml", price: 229.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/e5/b2/83/e5b283de0b3d3b3ed0759b6190e3779c.jpg",
    ],
    category: "unisex",
    featured: false,
    new: false,
    ratings: [
      { username: "Zendaya", gmail: "zendaya@gmail.com", rating: 5 },
    ],
    avgRating: 5,
    numRatings: 1,
  },
  {
    name: "Serene Woods",
    brand: "Botanica",
    description: "A grounding fragrance with cedarwood, vetiver, and a hint of green moss.",
    shortDescription: "Earthy, woody, and fresh",
    price: 109.99,
    sizes: [
      { size: "30ml", price: 109.99 },
      { size: "50ml", price: 159.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/3e/eb/27/3eeb277d41127e7f1d0f3a58bf1638eb.jpg",
      "https://i.pinimg.com/736x/95/74/e2/9574e2eafeee194a2712c03b49cf7d63.jpg",
    ],
    category: "men",
    featured: false,
    new: false,
    ratings: [
      { username: "Ryan Reynolds", gmail: "ryan.r@gmail.com", rating: 4.3 },
    ],
    avgRating: 4.3,
    numRatings: 1,
  },
  {
    name: "Moonlit Whisper",
    brand: "Celestia",
    description: "A celestial blend of lavender, bergamot, and vanilla that soothes and relaxes the senses.",
    shortDescription: "Lavender and bergamot with a soft vanilla finish",
    price: 129.99,
    sizes: [
      { size: "50ml", price: 129.99 },
      { size: "100ml", price: 199.99 },
    ],
    images: [
      "https://i.pinimg.com/736x/10/5d/7a/105d7a71ba57c8f9a138b129763d9447.jpg",
      "https://i.pinimg.com/736x/38/64/49/3864494ce7026d77a22f909372f850bf.jpg"
    ],
    category: "unisex",
    featured: false,
    new: true,
    ratings: [
      { username: "Tom Holland", gmail: "tom.h@gmail.com", rating: 4.6 },
    ],
    avgRating: 4.6,
    numRatings: 1,
  },
];

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    await Product.insertMany(products);
    console.log("Dummy data inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error inserting dummy data:", err));
