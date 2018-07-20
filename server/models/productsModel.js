const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Seller: {
        type: String,
        required: true,
        trim: true
    },
    Product_Type: {
        type: String,
        default: 'test',
        trim: true
    },
    Product_Name: {
        type: String,
        default: '',
        trim: true
    },
    Brand: {
      type: String,
      required: true
    },
    Price: {
      type: Number,
      required: true
    },
    Quantity: {
      type: Number,
      required: true
    },
    Description: {
      type: String,
      default: '',
      trim: true
    },
    Img_Product: {
      type: String,
      default: 'main.png'
    },
    Url_clound: {
      type: String,
      required: true
    },
    Enable: {
      type: Boolean,
      default: true
    },
    Status: {
      type: [{
        type: String,
        enum: ['Mới','Đã qua sử dụng']
      }],
      default: ['Mới']
    },
    Create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
    }
});

module.exports = mongoose.model('Products', productSchema);