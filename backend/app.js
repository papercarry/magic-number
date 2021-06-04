// Import express, cors and nanoid
const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

// Creating the app and enabling cors
const app = express();
app.use(cors());

// Middleware for creating new session
app.post('/', function (req, res) {
    // sending a response, treat the parameter provided as JSON
    // and convert the parameter to JSON string and put it in the response body
    res.json('Creating new session');
});

// Start listening to port 8000
app.listen(8000, function () {
    console.log('Magic Number Game app listening on Port 8000');
});
