const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    material: { type: String, required: true },
    isbn: { type: String, required: true },
    department: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Product = model("Product", productSchema);

module.exports = Product;