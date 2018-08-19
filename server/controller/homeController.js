"use strict";

const About = require("../models/aboutModel");
const Product = require('../models/productsModel');

exports.homePage = (req, res, next) => {
    Product.find({Enable: true},{__v: 0}).sort({Create_at: -1})
    .exec()
    .then(result => {
        result.map(imgEdit => {
            let	propImg = 'Img_Product',
                position = imgEdit.Img_Product.indexOf(',');
            if(imgEdit.Img_Product.length !== position) {
              imgEdit[propImg] = imgEdit.Img_Product.split(",", 1);
            }
            
            else {
              imgEdit[propImg] = imgEdit.Img_Product;
            }
            return imgEdit;
        });
        res.status(200).json(result);
    }).catch((err) => {
        res.status(404).json("Not Found" + err);
    });
}

exports.aboutPage = (req, res, next) => {
    About.find({}, {__v: 0})
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json(err));
}