require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const decoder = require('./modules/decoder');
const visits = require('./routes/main-route.js');
const breweries = require('./routes/fameRoute.js');
const visitDetails = require('./routes/visit-details-route.js');
const users = require('./routes/users.js');
const port = 4000;

app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/visits', visits);
app.use('/visitDetails', visitDetails);
app.use('/breweries', breweries);
app.use('/users', users);
app.use(decoder.token);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

console.log('kickin back with a cold one on port', port);
app.listen(port);
