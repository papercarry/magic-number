// Import express, cors and nanoid
const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');
const createHttpError = require('http-errors');

// Import MagicNumberGame
const MagicNumberGame = require('../logic/MagicNumberGame');

// Creating the app and enabling cors
const app = express();
app.use(cors());

// Creating sessions object as global variable.
const sessions = {};

// Middleware for creating new session
app.post('/', function (req, res) {
    // Generating a new session Id
    const sessionId = nanoid(10);

    // Set sessionId as new key of sessions object
    // Set the value to a new MagicNumberGame instance with max default at 100
    sessions[sessionId] = new MagicNumberGame(100);

    // sending a response, treat the parameter provided as JSON
    // and convert the parameter to JSON string and put it in the response body
    res.json({
        session_id: sessionId,
    });
});

// Middleware for making attempt
// /:sessionId to extract param from path
app.put('/:sessionId', function (req, res, next) {
    // extract sessionId from params
    const sessionId = req.params.sessionId;

    // extract attempt from query
    const attempt = req.query.attempt;

    // convert attempt from string to number
    const attemptNumber = Number(attempt);
    // Check if attempt is a number
    if (Number.isNaN(attemptNumber)) {
        // return to end the function immediately after sending response.
        return next(createHttpError(400, `Attempt (${attempt}) is Not an Number!`));
    }

    // Check if attempt is an integer
    if (!Number.isInteger(attemptNumber)) {
        return next(createHttpError(400, `Attempt (${attempt}) is Not an Integer!`));
    }

    // Check if attempt is a positive integer
    if (attemptNumber < 0) {
        return next(createHttpError(400, `Attempt (${attempt}) is Not a Positive Integer!`));
    }

    // Check if sessionId exists
    if (!sessions[sessionId]) {
        return next(createHttpError(400, `Attempt (${sessionId}) not found!`));
    }

    // retrieve appropriate magicNumberGame based on the session Id
    const magicNumberGame = sessions[sessionId];

    // Make a guess and get the progress
    const progress = magicNumberGame.guess(attempt);

    // Send the progress, treat it as JSON and put the JSON string in the response body
    return res.json(progress);
});

app.use(function (req, res, next) {
    return next(createHttpError(404, `Not found ${req.method} ${req.originalUrl}`));
});

// Error handling middleware, Note how it has 4 parameters instead of 3.
app.use(function (err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Unknown Error';
    console.log(err);
    return res.status(status).json({
        error: message,
    });
});

// Start listening to port 8000
app.listen(8000, function () {
    console.log('Magic Number Game app listening on Port 8000');
});
