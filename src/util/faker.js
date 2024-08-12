const { faker } = require("@faker-js/faker");

const generateProduct = () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    material: faker.commerce.productMaterial(),
    isbn: faker.commerce.isbn(),
    department: faker.commerce.department(),
    image: faker.image.url(),
});

module.exports = { generateProduct };