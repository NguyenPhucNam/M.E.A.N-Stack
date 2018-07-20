"use strict";
const Account = require('../models/accountModel');
const bcrypt = require('bcrypt');
const config = require("../config/config");
const jwt = require('jsonwebtoken');

exports.post_Signin = (req, res, next) => {
    Account.find({ email: req.body.email })
    .exec()
    .then(users => {
        if(users.length < 1) {
            return res.status(404).json({ message: 'Tài khoản không tồn tại' });
        }
        bcrypt.compare(req.body.password, users[0].password, (err, result) => {
            if(err) {
                return res.status(401).json({ message: 'Sai mật khẩu' });
            }
            if(result) {
                const token = jwt.sign({
                    _id: users[0]._id,
                    email: users[0].email
                }, config.JWT_KEY, {
                    expiresIn: '7d'
                });
                return res.status(200).json({
                    message: "Đăng nhập thành công",
                    token: token
                });
            }
            res.status(401).json({ message: "Email hoặc mật khẩu bị sai." });
        });
    })
    .catch(err => {
        res.status(500).json({error: err})
    });
}

exports.post_Signup = (req, res, next) => {
    Account.findOne({ email: req.body.email })
    .exec()
    .then(user => {
        if(user !== null) {
            return res.status(409).json({ message: 'Tài khoản đã tồn tại' });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({error: err});
                } else {
                    const account = new Account();
                    account.User.Username = req.body.name;
                    account.User.Phone = req.body.phone;
                    account.email = req.body.email;
                    account.password = hash;
                    account.save()
                    .then(() => {
                        res.status(201).json({message: 'Success'})
                    })
                    .catch(err => {
                        res.status(500).json({error: err})
                    });
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    });
}

exports.get_Logout = (req, res, next) => {

}

exports.get_Profile = (req, res, next) => {
    Account.findById(req.params.id)
    .exec()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
}