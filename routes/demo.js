const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// get request

router.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

// router.get('/hello', (req, res) => {
//   //   res.send('We are here to welcome you');
//   res.json({
//     success: true,
//     message: 'Welcome to the world of Programmers',
//   });
// });

router.get('/about', (req, res) => {
  res.json({
    data: 'We are move on ',
  });
});

//>>>>>>>>>>>>>>>>> routes that contains connectDatabase

// router.post('/create', async (req, res) => {
//   const newProduct = new Product({
//     name: 'iPhone 6s',
//     price: 4600,
//     description: 'iPhone is a very bad phone',
//     inStock: true,
//   });
//   await newProduct.save();
//   // postman
//   res.json({ newProduct });
// });

// 2nd way of creating a product

// router.post('/create', async (req, res) => {
//   Product.create({
//     name: 'iPhone 7s',
//     price: 5600,
//     description: 'iPhone is a very godd phone',
//     inStock: false,
//   });
//   res.json({
//     message: 'Product Created successfully',
//   });
// });

// https://www.restapitutorial.com/httpstatuscodes.html

// 3rd of creating a product

// router.post('/create', async (req, res) => {
//   Product.create(req.body);
//   res.status(201).json({
//     message: 'Product created successfully',
//   });
// });

// router.get('/find', async (req, res) => {
//   // const product = await Product.findOne({ inStock: true });
//   // const product = await Product.findById('61b2a047ca673c30d278c188');

//   // to use this make sure add the /:id in url
//   // const product = await Product.findById(req.params.id);
//   res.json(product);
// });

module.exports = router;
