var express = require ('express');
var http = require ('http');
var path = require ('path');
var app = express();

port = process.env.PORT || 1438;

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.listen(port);