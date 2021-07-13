const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid')


var app = express();

var sessions = {};


app.use(cors());

//var creatingnewsession = function (req,res,next){
//    res.send("Creating new session");
//}

app.post('/', function (req, res) {
    var sessionId = nanoid(10);
    sessions["session_id"] = sessionId
    //res.send('Creating new session!')
    res.send(sessions)
})

app.listen(8000, function () {
    console.log('Magic Number Game listening on port 8000')
})