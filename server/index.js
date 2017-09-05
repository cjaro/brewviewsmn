require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var decoder = require('./modules/decoder');
var visits = require('./routes/main-route.js');
var breweries = require('./routes/breweries.js');
// var fame = require('./routes/fame-route.js');
var visitDetails = require('./routes/visit-details-route.js');
var users = require('./routes/users.js');
var port = 4000;

// uses
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/visits', visits);
app.use('/visitDetails', visitDetails);
app.use('/breweries', breweries);
app.use('/users', users);
// app.use('/fame', fame);

// Decodes the token in the request header and attaches the decoded token to req.decodedToken on the request
app.use(decoder.token);

// serve index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

console.log('kickin back with a cold one on port', port);
app.listen(port);
