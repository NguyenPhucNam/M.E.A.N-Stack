"use strict";
const config = require("../config/config");
const jwt = require('jsonwebtoken');

exports.isLogin = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token, config.JWT_KEY);
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Vui lòng đăng nhập"
        });
    }
}