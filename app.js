const express = require('express')
const app = express()

app.use(function (req, res, next){
    console.log("HTTP request", req.method, req.url, req.body);
    return next();
});

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// app.get('/', (req, res) => res.redirect('/index.html'))

app.use(express.static('frontend'));

var http = require('http');

http.createServer(app).listen(process.env.PORT, function () {
    console.log('HTTP on port');
});
// http.createServer(app).listen(PORT, function () {
//     console.log('HTTP on port 3000');
// });