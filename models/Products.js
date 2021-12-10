const mongoose = require('mongoose');

// shop >> products >> {name, price, description,inStock}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model('Product', ProductSchema);
