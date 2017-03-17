var express = require('express');
var pool = require('../config/database-pool.js');
var router = require('express').Router();

// return all brews_test
//This is working!!!
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT brews_test.*, my_brewery_db.name FROM brews_test JOIN my_brewery_db ON brews_test.brewery_id = my_brewery_db.id ORDER BY date_had DESC')
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

//having trouble ehre with my post - getting an error on attempt to save because dropdown isn't working
//get dropdown for rating working!!!

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
  var beerID = req.params.id;
  console.log('Deleting beer ID:, ', beerID);
  pool.connect()
    .then(function (client) {
      client.query('DELETE FROM brews_test WHERE id = $1',
        [beerID])
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
  var beerID = req.params.id;
  var brew = req.body;
  console.log('Updating brew:, ', brew);
  pool.connect()
    .then(function (client) {
      client.query('UPDATE brews_test SET name=$1, date_had=$2, notes=$3, rating=$4, brewery_id=$5 WHERE id=$6',
        [brew.name, brew.date_had, brew.notes, brew.rating, brew.brewery_id, beerID])
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
