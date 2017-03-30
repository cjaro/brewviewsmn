require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var visits = require('./routes/main-route.js');
var breweries = require('./routes/breweries.js')
var visitDetails = require('./routes/visit-details-route.js');
var port = 5000;

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/visits', visits);
app.use('/visitDetails', visitDetails);
app.use('/breweries', breweries);

// serve index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

console.log('listening on port',port);
app.listen(port);
