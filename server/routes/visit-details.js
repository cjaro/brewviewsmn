var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

// return all visit details
router.use('/', function (req, res) {
  var visitID = req.query.visitID
  console.log('working at visit-details route and visitID is', visitID);

  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM brews_test JOIN visits ON brews_test.visit_id = visits.id ' +
      'JOIN my_brewery_db ON visits.brewery_id = my_brewery_db.id WHERE visits.id=$1 ORDER BY date_had DESC',[visitID])

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
