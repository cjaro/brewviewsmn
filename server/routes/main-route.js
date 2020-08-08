//DOM - home view
const express = require('express');
const router = require('express').Router();
const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json');
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
    pool.connect()
        .then(function(client) {
            client.query('SELECT * FROM visits ORDER BY date_had DESC;')
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
    const newVisit = req.body;
    console.log('New visit: ', newVisit);
    pool.connect()
        .then(function(client) {
            client.query('INSERT INTO visits (date_had, brewery, location) VALUES ($1, $2, $3) RETURNING id',
                [newVisit.date_had, newVisit.brewery, newVisit.location])
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
    const brewRecordDeleteID = req.body;
    console.log('brewRecordDeleteID = req.params.id', req.body)
    console.log('Deleting brewID main: ', brewRecordDeleteID);
    pool.connect()
        .then(function(client) {
            client.query('DELETE FROM brews_test WHERE visit_id=$1;', [brewRecordDeleteID])
                .then(function(result) {
                    client.query('DELETE FROM visits WHERE id=$1;')
                })
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