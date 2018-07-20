"use strict";

const Product = require("../models/productsModel");

exports.product_Details = (req, res, next) => {
    let id = req.params.id;
    Product.findById(id)
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}
