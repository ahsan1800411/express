const express = require('express');
const User = require('../models/User');

const router = express.Router();

// create a user
router.post('/new', (req, res) => {
  User.create(req.body);
  res.status(201).json({
    message: 'Success',
  });
});

// read/find a user

router.get('/get/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
router.get('/get', async (req, res) => {
  const user = await User.find({});
  res.json(user);
});

module.exports = router;
