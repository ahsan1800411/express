const express = require('express');
const demoRoutes = require('./routes/demo');
const userRoutes = require('./routes/user');
const app = express();

app.use(express.json());

app.use('/api', demoRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
