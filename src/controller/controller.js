const Product = require("./../models/product.model");
const generatePayload = async (page, limit) => {
    const skip = (page - 1) * limit;
    const products =  await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();

    return {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        data: products
    };
};

const filterProduct = async (uuid) => {
    return (await Product.find().where({ _id: uuid })).at(0);
};

module.exports = { generatePayload, filterProduct };