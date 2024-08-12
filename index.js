const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");

config();
const connect = require("./src/database/mongo");
const DATABASE_URL = require("./src/database/url");

const { routerProduct } = require("./src/router/product.router");

// require("./src/scripts/seed");

const app = express();

const database_uri = DATABASE_URL;

app.use(express.json());
app.use(cors());

app.use("/product", routerProduct);

app.get("/", (req, res) => {
    res.status(200).send({ msg: "Hello world" });
});

app.listen(3000, () => {
    connect(database_uri)
        .then(() => {
            console.log(`Server running at http://localhost:3000`);
        })
        .catch(() => {
            process.exit(1);
        })
});