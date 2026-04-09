'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Brunei Payment Gateway API!');
});

app.post('/api/payments', (req, res) => {
    // Logic to process payment
    res.send('Payment processed!');
});

app.get('/api/payments/:id', (req, res) => {
    // Logic to retrieve payment by ID
    res.send(`Payment details for ID: ${req.params.id}`);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
