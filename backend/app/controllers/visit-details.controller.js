const pool = require("../config/db.config");

exports.findAllDetails = (req, res) => {
  const visitID = req.query.id;
  console.log(`working at visit-details route with visitID ${visitID}`);

  pool.connect().then(function (client) {
    client
      .query("SELECT * FROM beers JOIN visits ON beers.visit_id = visits.id WHERE visits.id=$1 ORDER BY rating DESC;", 
      [ visitID ])
      .then(function (result) {
        client.release();
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch(function (err) {
        console.log("error on SELECT", err);
        res.sendStatus(500);
      });
  });
};

exports.create = (req, res) => {
  const newBeer = req.body;
  console.log("New Beer: ", newBeer);
  pool.connect().then(function (client) {
    client
      .query(`INSERT INTO beers (name, abv, rating, notes, visit_id) VALUES ($1, $2, $3, $4, $5)`, [
        newBeer.name,
        newBeer.abv,
        newBeer.rating,
        newBeer.notes,
        newBeer.visit_id
      ])
      .then(function (result) {
        client.release();
        res.sendStatus(201);
      })
      .catch(function (err) {
        console.log("error on INSERT", err);
        res.sendStatus(500);
      });
  });
};

exports.update = (req, res) => {
  pool.connect().then(function (client) {
    client
      .query(`UPDATE beers SET (columnname, value) VALUES ($1, $2)`, [newBeer.columnname, newBeer.value])
      .then(function (result) {
        client.release();
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Visit with id=" + req.params.id + `: ${err}`
        });
      });
  });
};

exports.delete = (req, res) => {};
