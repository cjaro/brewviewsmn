//DOM - home view
var express = require('express');
var pool = require('../config/database-pool.js');
var router = require('express').Router();
var admin = require('firebase-admin');
var serviceAccount = require('../firebase-service-account.json');

admin.initializeApp({
    credential: admin.credential.cert("./server/firebase-service-account.json"),
    databaseURL: "https://brewviewsmn.firebaseio.com" // replace this line with your URL
});

//create command that specificies user id
//SELECT * (recorded brews) <- by specific user
// WHERE user_id = $1
// auth --> INSERT INTO users (user_name, email) VALUES ($1, $2);

router.get('/', function(req, res) {
    pool.connect()
        .then(function(client) {
            client.query('SELECT visits.*, my_brewery_db.name FROM visits JOIN my_brewery_db ON visits.brewery_id = my_brewery_db.id ORDER BY date_had DESC;')
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
    var newVisit = req.body;
    console.log('New visit: ', newVisit);
    pool.connect()
        .then(function(client) {
            client.query('INSERT INTO visits (date_had, brewery_id) VALUES ($1, $2) RETURNING id', [newVisit.date_had, newVisit.brewery_id])
                .then(function(result) {
                    client.release();
                    res.send(result.rows);
                })
                .catch(function(err) {
                    console.log('error on INSERT', err);
                    res.sendStatus(500);
                });
        });
});

router.delete('/:id', function(req, res) {
    var brewRecordDeleteID = req.params.id;
    console.log('brewRecordDeleteID = req.params.id', req.params.id)
    console.log('Deleting brewID main: ', brewRecordDeleteID);
    pool.connect()
        .then(function(client) {
            client.query('DELETE FROM visits WHERE id=$1;', [brewRecordDeleteID])
                .then(function(result) {
                    client.release();
                    res.sendStatus(200);
                })
                .catch(function(err) {
                    console.log('error on SELECT', err);
                    res.sendStatus(500);
                });
        });
});

module.exports = router;



//having trouble ehre with my post - getting an error on attempt to save
//get dropdown for rating working
//error message reading that name is null - problem with id?
// 3/20 4:22pm UPDATE: dropdown rating is working and corresponding to SQL db
// updating still isn't working, though
// error: possibly unhandled rejection