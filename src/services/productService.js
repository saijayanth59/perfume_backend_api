const ProductRepository = require("../repositories/productRepository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProductById(id) {
    try {
      const product = await this.productRepository.findById(id);
      if (!product) throw new Error("Product not found");
      return product;
    } catch (error) {
      throw new Error(`Error while fetching product by ID: ${error.message}`);
    }
  }

  async getAllProducts(query) {
    try {
      const { page, pageSize, minPrice, maxPrice, ...filters } = query;

      if (!filters.price) {
        // price will take precedence over minPrice and maxPrice
        if (minPrice) {
          filters.price = { ...filters.price, $gte: minPrice };
        }
        if (maxPrice) {
          filters.price = { ...filters.price, $lte: maxPrice };
        }
      }

      return await this.productRepository.findAll(
        filters,
        { page, pageSize },
        "ratings",
        null,
        "-ratings"
      );
    } catch (error) {
      throw new Error(`Error while fetching all products: ${error.message}`);
    }
  }

  async updateProductById(id, updateData) {
    try {
      const updatedProduct = await this.productRepository.updateById(
        id,
        updateData
      );
      if (!updatedProduct) throw new Error("Product not found");
      return updatedProduct;
    } catch (error) {
      throw new Error(`Error while updating product: ${error.message}`);
    }
  }

  async deleteProductById(id) {
    try {
      const deletedProduct = await this.productRepository.deleteById(id);
      if (!deletedProduct) throw new Error("Product not found");
    } catch (error) {
      throw new Error(`Error while deleting product: ${error.message}`);
    }
  }

  async addNewRating(productId, rating, username, gmail, comment) {
    try {
      const product = await this.productRepository.findById(productId);
      if (!product) throw new Error("Product not found");

      const pos = await this.productRepository.getUserRatingPos(
        product,
        username
      );
      if (pos == -1) {
        return await this.productRepository.addNewRating(
          product,
          username,
          rating,
          gmail,
          comment
        );
      }
      return await this.productRepository.updateRating(product, pos, rating);
    } catch (error) {
      throw new Error(`Error while adding rating to product: ${error.message}`);
    }
  }
}

module.exports = ProductService;
