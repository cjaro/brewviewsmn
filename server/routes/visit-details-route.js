var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

// return all visit details
// add user table with WHERE visits.id=$1 AND user_id=$2
router.get('/', function(req, res) {
    var visitID = req.query.visitID
    console.log('working at visit-details route and visitID is', visitID);
    pool.connect()
        .then(function(client) {
            client.query('SELECT brews_test.*, my_brewery_db.name FROM brews_test ' +
                    'JOIN visits ON brews_test.visit_id = visits.id ' +
                    'JOIN my_brewery_db ON visits.brewery_id = my_brewery_db.id ' +
                    'WHERE visits.id=$1 ' +
                    'ORDER BY rating DESC;', [visitID])
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
    var newBeer = req.body;
    console.log('NewBeer = ', newBeer);
    pool.connect()
        .then(function(client) {
            client.query('INSERT INTO brews_test (beer_name, rating, notes, visit_id) VALUES ($1, $2, $3, $4)', [newBeer.beer_name, newBeer.rating, newBeer.notes, newBeer.visit_id])
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

// router.delete('/:id', function(req, res) {
//     var brewRecordDeleteID = req.params.id;
//     console.log('Deleting brewID: ', brewRecordDeleteID);
//     pool.connect()
//         .then(function(client) {
//             client.query('DELETE FROM brews_test WHERE id=$1;', [brewRecordDeleteID])
//                 .then(function(result) {
//                     client.release();
//                     res.sendStatus(200);
//                 })
//                 .catch(function(err) {
//                     console.log('error on SELECT', err);
//                     res.sendStatus(500);
//                 });
//         });
// });

router.put('/:id', function(req, res) {
    var brewRecordUpdateID = req.params.id;
    var brewRecordUpdate = req.body;
    console.log('Updating brew: ', brewRecordUpdate);
    pool.connect()
        .then(function(client) {
            client.query('UPDATE brews_test SET beer_name=$1, rating=$2, notes=$3 WHERE id=$4;', [brewRecordUpdate.beer_name, brewRecordUpdate.rating, brewRecordUpdate.notes, brewRecordUpdateID])
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