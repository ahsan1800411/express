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

router.post('/create', async (req, res) => {
  const newProduct = new Product({
    name: 'iPhone 6s',
    price: 4600,
    description: 'iPhone is a very bad phone',
    inStock: true,
  });
  await newProduct.save();
  // postman
  res.json({ newProduct });
});

module.exports = router;
