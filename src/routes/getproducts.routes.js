const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.get("/products", async (req, res) => {
  try {
    const products = await productsModel.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
