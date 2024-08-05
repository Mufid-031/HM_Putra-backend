const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createProduct = async ({ nameProduct, categoryProduct, priceProduct, categoryPriceProduct }) => {
  try {
    const product = await prisma.product.create({
      data: {
        nameProduct,
        categoryProduct,
        priceProduct,
        categoryPriceProduct,
      },
    });
    return product;
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  return await prisma.product.findMany();
};

const updateProduct = async ({ id }, { nameProduct, categoryProduct, priceProduct, categoryPriceProduct }) => {
  try {
    const product = await prisma.product.update({
      where: { id: id },
      data: {
        nameProduct,
        categoryProduct,
        priceProduct,
        categoryPriceProduct,
      },
    });
    return product;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async ({ id }) => {
  try {
    const product = await prisma.product.delete({
      where: { id: id },
    });
    return product;
  } catch (error) {
    throw error;
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
