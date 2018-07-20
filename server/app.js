const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const config = require('./config/config.json');
const bodyParser = require("body-parser");
const homeRouter = require("./routes/home");
const productsRouter = require("./routes/products");
const accountRouter = require("./routes/account");
const sellerRouter = require("./routes/seller");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1 year' }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

mongoose.Promise = global.Promise;
mongoose.connect(config.MongoLocal, { useNewUrlParser: true })
.then(() => console.log("Start Database Success"))
.catch((err, done) => done("Could not connect to DB: " + err));

app.use('/', homeRouter);
app.use('/san-pham', productsRouter);
app.use('/tai-khoan', accountRouter);
app.use('/kenh-nguoi-ban', sellerRouter);

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;