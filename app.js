const express = require('express')
const fs = require('fs')
const https = require('https');
const app = express()

app.use(function (req, res, next){
    console.log("HTTPS request", req.method, req.url, req.body);
    return next();
});

// Constants
// const PORT = 3000;
// const HOST = '0.0.0.0';

let httpsOptions = {
   cert:fs.readFileSync('./ssl/www_zeyuli_me.crt');
   ca:fs.readFileSync('./ssl/www_zeyuli_me.ca-bundle');
   key:fs.readFileSync('./ssl/zeyuli_me.key');
};
// app.get('/', (req, res) => res.redirect('/index.html'))

app.use(express.static('frontend'));

https.createServer(httpsOptions,app).listen(process.env.PORT, function () {
    console.log('HTTPS on port');
});
// http.createServer(app).listen(PORT, function () {
//     console.log('HTTP on port 3000');
// });