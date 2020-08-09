const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = new pg.Pool(
    {
        database: 'brewviewsmn',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000,
    }
);

router.get('/', function(req, res) {
    // var fameBrews = req.query.fameBrews console.log('getting hall of fame beers:
    // ', fameBrews);
    pool
        .connect()
        .then(function(client) {
            client
                .query('SELECT beers.beer_name, beers.rating, beers.notes, breweries.brewery, breweries.date_had ' +
                       'FROM beers JOIN breweries ON beers.visit_id = breweries.id ' +
                       'WHERE rating >= 9 ORDER BY rating DESC;')
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