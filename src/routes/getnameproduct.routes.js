const express = require("express");
const router = express.Router();
const searchModel = require("../models/search.model");

router.get("/products", async (req, res) => {
    const { nameProduct } = req.query;

    try {
        const products = await searchModel.getProductByName(nameProduct);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})

module.exports = router