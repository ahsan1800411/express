const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDatabase;
