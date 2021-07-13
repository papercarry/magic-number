const express = require('express');
const cors = require('cors');
const nanoid = require('nanoid');

var app = express();

app.use(cors());

var creatingnewsession = function (req,res,next){
    alert("Creating new session");
}

app.post('/',creatingnewsession, function (req, res) {
    res.send('Hello World!')
  })