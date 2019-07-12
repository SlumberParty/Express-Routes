const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');

app.use(express.json());

app.use('api/v1/items', itemRoutes);

module.exports = app;


