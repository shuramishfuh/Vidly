'use strict';
var express = require('express');
var port = process.env.PORT || 1337;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});


app.listen(port, () => {
    console.log(`starting server on ${port}`);
});