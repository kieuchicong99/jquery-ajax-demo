
const express = require('express');
const server = express();
let data = require('./fakedata');
const port = 4000;
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

server.get("/question1", (req, res) => {
    res.json(data);
 });

