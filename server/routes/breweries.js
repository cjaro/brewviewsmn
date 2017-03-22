//controls list of breweries for dropdown in add.html

var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

// return all breweries
router.get('/', function (req, res) {
  console.log('getting beers from controller');
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM my_brewery_db ORDER BY name ASC;')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
