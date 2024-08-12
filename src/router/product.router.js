const { Router } = require("express");
const { generatePayload, filterProduct } = require("../controller/controller");


const routerProduct = Router();

routerProduct.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query?.page) || 1;
        const limit = parseInt(req.query?.limit) || 20;
        const response = await generatePayload(page, limit)
        res.status(200).send(response);
    } catch (error) {
        console.log("🚀  ~ routerProduct.get ~ error:", error);
        res.status(500).send({
            msg: "Internal server error"
        })
    }
});

routerProduct.get("/:id", async (req, res) => {
    try {
        const product = await filterProduct(req.params.id);
        if(!product) {
            return res.status(404).send({
                msg: "Product not found"
            })
        }
        res.status(200).send(product);
    } catch (error) {
        console.log("🚀  ~ routerProduct.get ~ error:", error);
        res.status(500).send({
            msg: "Internal server error"
        });
    }
});

module.exports = { routerProduct };