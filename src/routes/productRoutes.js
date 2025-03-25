const express = require("express");
const ProductController = require("../controllers/productController");
const { authenticate, isAdmin } = require("../middlewares/authenticate");

const router = express.Router();

router.get("/:id", ProductController.getProductById);
router.get("/", ProductController.getAllProducts);
router.patch("/:id", ProductController.updateProductById);
router.delete("/:id", ProductController.deleteProductById);
router.post("/:id/rating", ProductController.addNewRating);

module.exports = router;
