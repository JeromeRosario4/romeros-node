const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const items = require('./routes/item');
const categories = require('./routes/category');
const users = require('./routes/user'); // ✅ This already handles user routes

// const dashboard = require('./routes/dashboard')
// const order = require('./routes/order')

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/api/v1', items);
app.use('/api/v1', categories);
app.use('/api/v1', users); // ✅ Already includes login, register, etc.

// app.use('/api/v1', dashboard);
// app.use('/api/v1', order);

module.exports = app;
