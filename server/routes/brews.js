var express = require('express');
var pool = require('../config/database-pool.js');
var router = require('express').Router();

// var admin = require('firebase-admin');
// var serviceAccount = require('../firebase-service-account.json');


//DOM - home view

// return all brews_test
//This is working!!!
//or not - keep at it
// 3/20 4:45pm - it's working


// March 21, 2017 11:00am
//initialize routes
//fxnlity requires ability to act with firebase tokens

//TODO auth stuff here
// admin.initializeApp({
//   credential: admin.credential.cert("./server/firebase-service-account.json"),
//   databaseURL: "https://brewviewsmn.firebaseio.com" // replace this line with your URL
// });



router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT brews_test.*, my_brewery_db.name FROM brews_test JOIN my_brewery_db ON brews_test.brewery_id = my_brewery_db.id ORDER BY date_had DESC;')
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

//having trouble ehre with my post - getting an error on attempt to save
//get dropdown for rating working
//error message reading that name is null - problem with id?
// 3/20 4:22pm UPDATE: dropdown rating is working and corresponding to SQL db
// updating still isn't working, though
// error: possibly unhandled rejection

router.post('/', function (req, res) {
  var newBeer = req.body;
  console.log('New brew: ', newBeer);
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO brews_test (beer_name, date_had, rating, notes, brewery_id) VALUES ($1, $2, $3, $4, $5)',
        [newBeer.beer_name, newBeer.date_had, newBeer.rating, newBeer.notes, newBeer.brewery_id])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });
    });
});


router.delete('/:id', function(req, res) {
  var brewID = req.params.id;
  console.log('Deleting brewID: ', brewID);
  pool.connect()
    .then(function (client) {
      client.query('DELETE FROM brews_test WHERE id=$1;',
        [brewID])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});

router.put('/:id', function(req, res) {
  var brewID = req.params.id;
  var brew = req.body;
  console.log('Updating brew: ', brew);
  pool.connect()
    .then(function (client) {
      client.query('UPDATE brews_test SET beer_name=$1, date_had=$2, notes=$3, rating=$4, brewery_id=$5 WHERE id=$6;',
        [brew.beer_name, brew.date_had, brew.notes, brew.rating, brew.brewery_id, brewID])
        .then(function (result) {
          client.release();
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log('error on UPDATE', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
