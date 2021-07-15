const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid')
const MagicNumberGame = require("../logic/MagicNumberGame")

var app = express();

var sessions = {};


app.use(cors());

//var creatingnewsession = function (req,res,next){
//    res.send("Creating new session");
//}

app.post('/', function (req, res) {
    var sessionId = nanoid(10);
    sessions["session_Id"] = new MagicNumberGame(100);
    res.json({
        session_id: sessionId,
    });
});

app.put("/:sessionId",function(req,res){
    var sessionId = req.params.sessionId;
    var attempt = req.query.attempt
    console.log(attempt)
    var magicNumberGame = sessions[sessionId];
    var progress = magicNumberGame.guess(attempt);
    return res.json(progress);
})

app.listen(8000, function () {
    console.log('Magic Number Game listening on port 8000')
})