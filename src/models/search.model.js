const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductByName = async (nameProduct) => {
    const regexForName = new RegExp(nameProduct, 'i')

    return prisma.product.findMany({
        where: {
            nameProduct: regexForName
        }
    });
};

module.exports = { getProductByName };