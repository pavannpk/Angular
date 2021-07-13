const mongoose = require('mongoose');

//schema means you mention the rules of it
let productSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true
    },
    image : {
        type : String
    },
    price : {
        type : Number
    },
    qty : {
        type : Number
    },
    info : {
        type : String
    },
    created : {
        type : Date,
        default : Date.now()
    },
});

//create a model
//product is the my table name
let Product = mongoose.model('product', productSchema);

//i use in my router
module.exports = Product;


