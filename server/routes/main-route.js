const router = require('express').Router();
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
            client.query('SELECT * FROM breweries ORDER BY date DESC;')
                .then(function(result) {
                    client.release();
                    res.send(result.rows);
                })
                .catch(function(err) {
                    console.log('SELECT ERROR:', err);
                    res.sendStatus(500);
                });
        });
});

router.post('/', function(req, res) {
    const newVisit = req.body;
    console.log('New visit: ', newVisit);
    pool.connect()
        .then(function(client) {
            client.query('INSERT INTO breweries (date, brewery, location) VALUES ($1, $2, $3) RETURNING id',
                [newVisit.date, newVisit.brewery, newVisit.location])
                .then(function(result) {
                    client.release();
                    res.send(result.rows);
                })
                .catch(function(err) {
                    console.log('INSERT ERROR:', err);
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
            client.query('DELETE FROM beers WHERE visit_id=$1;', [brewRecordDeleteID])
                .then(function(result) {
                    client.query('DELETE FROM breweries WHERE id=$1;')
                })
                .then(function(result) {
                    client.release();
                    res.sendStatus(200);
                })
                .catch(function(err) {
                    console.log('DELETE: ERROR', err);
                    res.sendStatus(500);
                });
        });
});

module.exports = router;