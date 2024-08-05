const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await productsModel.deleteProduct(req.params);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
