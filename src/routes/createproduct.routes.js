const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.post("/products", async (req, res) => {
  const { nameProduct, categoryProduct, priceProduct, categoryPriceProduct } = req.body;

  try {
    const response = await productsModel.createProduct(nameProduct, categoryProduct, priceProduct, categoryPriceProduct);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
