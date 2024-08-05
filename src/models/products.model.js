const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createProduct = async ({ nameProduct, categoryProduct, priceProduct, categoryPriceProduct }) => {
  return prisma.product.create({
    data: {
      nameProduct,
      categoryProduct,
      priceProduct,
      categoryPriceProduct,
    },
  });
};

const getProducts = async () => {
  return prisma.product.findMany();
};

const updateProduct = async ({ id }, { nameProduct, categoryProduct, priceProduct, categoryPriceProduct }) => {
  return prisma.product.update({
    where: { id: id },
    data: {
      nameProduct,
      categoryProduct,
      priceProduct,
      categoryPriceProduct,
    },
  });
};

const deleteProduct = async ({ id }) => {
  return prisma.product.delete({
    where: { id: id },
  });
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
