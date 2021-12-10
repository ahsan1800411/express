require('dotenv').config();

const app = require('./app.js');
const connectDatabase = require('./config/db');

const port = process.env.PORT || 5000;

// connecting with the db
connectDatabase();

app.listen(port, () => {
  console.log('server is running on port 5000');
});
