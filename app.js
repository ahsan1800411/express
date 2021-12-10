const express = require('express');
const demoRoutes = require('./routes/demo');
const app = express();

app.use(express.json());

app.use('/api', demoRoutes);

module.exports = app;
