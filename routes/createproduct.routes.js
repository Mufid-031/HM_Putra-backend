const express = require("express");
const router = express.Router();
const productsModel = require("../models/products.model");

router.post("/products", async (req, res) => {
  try {
    const response = await productsModel.createProduct(req.body);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;