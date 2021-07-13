const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/*-------------------------------------------------------------------------------------------------*/

/*
    Usage : get all products
    URL : http://127.0.0.1:5000/api/products
    Fields : no-fields
    Method : GET
*/
//fetch data from mongo
router.get('/products', async (request, response) => {
    try {
        let products = await Product.find();
        //once you recieve the data and send back as json format
        response.status(200).json(products);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message})
    }
});

/*-------------------------------------------------------------------------------------------------*/

/*
    Usage : get a single products
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : no-fields
    Method : GET
*/
router.get('/products/:id', async (request, response) => {
    let productID = request.params.id;
    try {
        let particularProduct = await Product.findById(productID);
        //once you recieve the data and send back as json format
        response.status(200).json(particularProduct);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message})
    }
});

/*-------------------------------------------------------------------------------------------------*/

/*
    Usage : CREATE a single products
    URL : http://127.0.0.1:5000/api/products
    Fields : id, name, price, quantity, info, image
    Method : POST
*/
router.post('/products/', async (request, response) => {
    let newProduct = {
      name : request.body.name,
      image : request.body.image,
      price : request.body.price,
      qty : request.body.qty,
      info : request.body.info
    };
    try {
        /*let findDuplicate = await Product.findOne({name : newProduct.name});
        if (!findDuplicate){
          //insert into database
          let newCreatedProduct = new Product(newProduct);
          //store - save the product to database
          newCreatedProduct = await newCreatedProduct.save();
          response.status(200).json({
            msg : 'Product is created',
            product : newCreatedProduct
          });*/
          let product = await Product.findOne({name : newProduct.name});
          if (!product){
            //insert into database
            let product = new Product(newProduct);
            //store - save the product to database
            product = await product.save();
            response.status(200).json(product);

        }
        else {
          response.status(400).json({
            msg : 'Product is Already Exists'
          });
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message})
    }
});

/*-------------------------------------------------------------------------------------------------*/

/*
    Usage : UPDATE an existing product
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : id, name, price, quantity, info, image
    Method : PUT
*/
router.put('/products/:id', async (request, response) => {
    let updateProductID = request.params.id;
    let updatedProduct = {
        name : request.body.name,
        image : request.body.image,
        price : request.body.price,
        qty : request.body.qty,
        info : request.body.info
    };
    try {
        let newlyUpdatedProduct = await Product.findById(updateProductID);
        if (newlyUpdatedProduct) {
            newlyUpdatedProduct = await Product.findByIdAndUpdate(updateProductID, {
                $set: updatedProduct
            }, {new : true});
            response.status(200).json(newlyUpdatedProduct);
        }
        else {
            response.status(500).json({
                msg : 'Product is not updated',
            })
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message})
    }
});

/*-------------------------------------------------------------------------------------------------*/

/*
    Usage : DELETE a product
    URL : http://127.0.0.1:5000/api/products/:id
    Fields : no-fields
    Method : DELETE
*/
router.delete('/products/:id', async (request, response) => {
    let deleteProductID = request.params.id;
    try {
        let deleteProduct = await Product.findByIdAndDelete(deleteProductID);
        //once you recieve the data and send back as json format
        response.status(200).json(deleteProduct);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({msg : err.message});
    }
});

/*-------------------------------------------------------------------------------------------------*/

module.exports = router;
