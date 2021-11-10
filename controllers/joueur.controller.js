const Product = require("../models/joueur.model");

module.exports = {
    showCreateForm: async (req, res, next) => {
        res.render("create")
    },
    createUser: async (req, res) => {
        const { label, price, quantity,user,email } = req.body;
        // const userExists = await User.findOne({ email });
        // if (userExists) {
        //     return res.status(403).json({ exists: true });
        // }
        const product = new Product({ label, price, quantity,user,email });
        if (req.file) {
            product.image = `/images/${req.file.filename}`;
        }

        await product.save();
        res.redirect("/users")
    },
    getUserById: async (req, res) => {
        const { _id } = req.params;
        const user = await Product.findById(_id);
        res.render("details", { user });
    },
    getListUsers: async (req, res) => {
        const products = await Product.find();
        res.render("list", { products });
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;

        await Product.findByIdAndDelete(id);
        console.log({ id });
        res.redirect("/users")
    },
}
