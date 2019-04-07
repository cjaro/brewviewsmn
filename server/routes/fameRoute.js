var express = require('express');
var router = express.Router();
var pool = require('../modules/pg-pool.js');

router.get('/', function(req, res) {
    // var fameBrews = req.query.fameBrews console.log('getting hall of fame beers:
    // ', fameBrews);
    pool
        .connect()
        .then(function(client) {
            client
                .query('SELECT brews_test.beer_name, brews_test.rating, brews_test.notes, visits.brewery' +
                    ', visits.date_had FROM brews_test JOIN visits ON brews_test.visit_id = visits.id' +
                    ' WHERE rating >= 9 ORDER BY rating DESC;')
                .then(function(result) {
                    client.release();
                    res.send(result.rows);
                })
                .catch(function(err) {
                    console.log('error on SELECT', err);
                    res.sendStatus(500);
                });
        });
});

module.exports = router;