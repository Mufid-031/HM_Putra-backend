const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductPrice = async (nameProduct, categoryProduct) => {
    return prisma.product.findMany({
        where: {
            nameProduct: nameProduct,
            categoryProduct: categoryProduct
        }
    });
};

module.exports = { getProductPrice };