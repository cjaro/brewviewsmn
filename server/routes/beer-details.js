var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

// return all brews
router.use('/', function (req, res) {
  var brewID = req.query.brewID
  console.log('working here! and brewID is', brewID);

  pool.connect()
    .then(function (client) {
      client.query('SELECT brews_test.*, my_brewery_db.name FROM brews_test JOIN my_brewery_db '+
      'ON brews_test.brewery_id = my_brewery_db.id WHERE brews_test.id=$1 ORDER BY date_had DESC',[brewID]) //what does this do? refer to?
        .then(function (result) {
          client.release();
          res.send(result.rows[0]);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
