require("dotenv").config();

const seedProduct = require("./seed");

(async () => {
    await seedProduct(1000);
    process.exit(1);
})();