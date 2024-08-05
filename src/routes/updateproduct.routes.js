const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { nameProduct, categoryProduct, priceProduct, categoryPriceProduct } = req.body;

  try {
    const product = await productsModel.updateProduct(id, nameProduct, categoryProduct, priceProduct, categoryPriceProduct);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
