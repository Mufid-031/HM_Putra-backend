const express = require("express");
const router = express.Router();
const printModel = require("../models/print.model");

router.get("/print", async (req, res) => {
  const { nameProduct, categoryProduct } = req.query;
  try {
    const products = await printModel.getProductPrice(nameProduct, categoryProduct);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router