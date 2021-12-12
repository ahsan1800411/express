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

// router.get('/get/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// });
// router.get('/get', async (req, res) => {
//   const user = await User.find({});
//   res.json(user);
// });

// // update a user  1st way;
// router.put('/update/:id', async (req, res) => {
//   const newData = {
//     name: req.body.name,
//     email: req.body.email,
//   };
//   await User.findByIdAndUpdate(req.params.id, newData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

// res.json('Update Successfully');
// });

// update a user by 2nd way;

// router.put('/update/:id', async (req, res) => {

//   await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.json('Update Successfully');
// });

// update a user by 3rd way;

// router.put('/update', async (req, res) => {
//   await User.updateOne({ name: 'Ahsan Mumtaz' }, req.body, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });
//   res.json('Update Successfully');
// });

// Delete a user;

// router.delete('/delete/:id', async (req, res) => {
//   await User.findByIdAndRemove(req.params.id);

//   res.json('Delete Successfully');
// });

// router.delete('/delete/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);

//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   await user.remove();
// });

module.exports = router;
