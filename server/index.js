var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var breweries = require('./routes/breweries.js');
var brews = require('./routes/brews.js');
var port = 5000;

// routes
app.use('/breweries', breweries);
app.use('/brews', brews);

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

console.log('listening on port',port);
app.listen(port);
