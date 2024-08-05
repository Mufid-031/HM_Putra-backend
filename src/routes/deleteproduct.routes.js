const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.delete("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productsModel.deleteProduct(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
