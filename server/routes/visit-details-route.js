const express = require('express');
const pg = require('pg');
const router = express.Router();
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
    const visitID = req.query.visitID
    console.log("req.query:", req.query)
    console.log('working at visit-details route - visitID is', visitID);
    pool.connect()
        .then(function(client) {
            client
                .query('SELECT * FROM beers JOIN breweries ON beers.visit_id = breweries.id ' +
                       'WHERE breweries.id=$1 ORDER BY rating DESC;', [visitID])
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

router.post('/', function(req, res) {
    const newBeer = req.body;
    console.log('NewBeer: ', newBeer);
    pool.connect()
        .then(function(client) {
            client
                .query('INSERT INTO beers (name, abv, rating, tasting_notes, visit_id) VALUES ($1, $2, $3, $4, $5)',
                    [newBeer.name, newBeer.abv, newBeer.rating, newBeer.tasting_notes, newBeer.visit_id])
                .then(function(result) {
                    client.release();
                    res.sendStatus(201);
                })
                .catch(function(err) {
                    console.log('error on INSERT', err);
                    res.sendStatus(500);
                });
        });
});

router.delete('/:id', function(req, res) {
    const brewRecordDeleteID = req.params.id;
    console.log('Deleting brewID: ', brewRecordDeleteID);
    pool.connect()
        .then(function(client) {
            client
                .query('DELETE FROM beers WHERE id=$1;', [brewRecordDeleteID])
                .then(function(result) {
                    client.release();
                    res.sendStatus(200);
                    // $location.path('/main');
                })
                .catch(function(err) {
                    console.log('error on SELECT', err);
                    res.sendStatus(500);
                });
        });
});

router.put('/:id', function(req, res) {
    const brewRecordUpdateID = req.params.id;
    const brewRecordUpdate = req.body;
    console.log('Updating brew: ', brewRecordUpdate);
    pool.connect()
        .then(function(client) {
            client
                .query('UPDATE beers SET name=$1, rating=$2, notes=$3 WHERE id=$4;',
                        [brewRecordUpdate.name, brewRecordUpdate.rating, brewRecordUpdate.tasting_notes, brewRecordUpdateID])
                .then(function(result) {
                    client.release();
                    res.sendStatus(200);
                })
                .catch(function(err) {
                    console.log('error on UPDATE', err);
                    res.sendStatus(500);
                });
        });
});

module.exports = router;