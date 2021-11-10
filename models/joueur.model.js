const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
    {
        label: String,
        price: Number,
        quantity: Number,
        user:String,
        email: String,
        image: String
    },
    {
        timestamps: true
    }
    );

        const Product = mongoose.model("user", productSchema);

        module.exports = Product;