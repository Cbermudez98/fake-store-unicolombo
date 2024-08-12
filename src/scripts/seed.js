const { generateProduct } = require("../util/faker");
const connect = require("./../database/mongo");
const Product = require("./../models/product.model");
const { CONSTANTS } = require("./../util/constants");

const seedProduct = async (limit) => {
    const database_uri = `mongodb://${CONSTANTS.DATABASE_USERNAME}:${CONSTANTS.DATABASE_PASSWORD}@${CONSTANTS.DATABASE_HOST}:${CONSTANTS.DATABASE_PORT}/${CONSTANTS.DATABASE_NAME}?authSource=admin`;
    await connect(database_uri);
    const promisesProduct = [];
    for(let i = 0; i < limit; i++) {
        const product = new Product(generateProduct())
        promisesProduct.push(product.save());
    }

    await Promise.allSettled(promisesProduct);
    console.log("Wrote with success:", limit);
};

module.exports = seedProduct;