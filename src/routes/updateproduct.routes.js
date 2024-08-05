const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.put("/products/:id", async (req, res) => {
  try {
    const product = await productsModel.updateProduct(req.params, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
