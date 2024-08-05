const express = require("express");
const cors = require("cors");
const createProduct = require("./src/routes/createproduct.routes");
const getProducts = require("./src/routes/getproducts.routes");
const deleteProduct = require("./src/routes/deleteproduct.routes");
const updateProduct = require("./src/routes/updateproduct.routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
// const prisma = new PrismaClient()

app.use(express.json());
app.use(cors());

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("tes");
// });

app.use(createProduct);
app.use(getProducts);
app.use(deleteProduct);
app.use(updateProduct);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
