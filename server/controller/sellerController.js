"use strict";
const Account = require("../models/accountModel");
const Product = require("../models/productsModel");

exports.sellerPage = (req, res, next) => {
    Product.find({ Seller: req.userData._id }, {__v: 0}).sort({Create_at: -1})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({message: err}));
}

exports.uploadImg = (req, res, next) => {
    if(!req.files) {
        res.status(500).json({
            message: err
        });
    } else {
        res.status(201).json({
            imgisSave: req.files
        });
    }
}

exports.addPage = (req, res, next) => {
    const product = new Product();
    product.Seller = req.userData._id;
    product.Product_Name = req.body.name;
    product.Description = req.body.decription;
    product.Brand = req.body.brand;
    product.Price = req.body.price;
    product.Quantity = req.body.quantity;
    product.Url_clound = req.body.Url_clound;
    product.Img_Product = req.body.img_Product;
    product.save()
    .then(result => res.status(201).json({
        message: "Success"
    }))
    .catch(err => res.status(500).json({
        message: err,
        loi: "Test lỗi"
    }));

}

exports.editPage = (req, res, next) => {
    res.status(200).json('result');    
}