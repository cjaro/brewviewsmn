// const db = require("../models");
// const Visit = db.visits;
// const Op = db.Sequelize.Op;

const pool = require("../config/db.config");

// Create and Save a new Visit
exports.create = (req, res) => {
  if (!req.body.brewery) {
    res.status(400).send({
      message: "The parameter `req.body.brewery` cannot be empty!"
    });
    return;
  }

  const newVisit = {
    brewery: req.body.brewery,
    date: req.body.date,
    notes: req.body.notes
  };
  console.log("New visit: ", newVisit);

  pool.connect().then(function (client) {
    client
      .query("INSERT INTO visits (date, brewery, notes) VALUES ($1, $2, $3) RETURNING id", [
        newVisit.date,
        newVisit.brewery,
        newVisit.notes
      ])
      .then(function (result) {
        client.release();
        res.send(result.rows);
      })
      .catch(function (err) {
        console.log("INSERT ERROR:", err);
        res.status(500).send({
          message: err.message || `An error occurred while creating the Visit: ${err}`
        });
      });
  });
};

// Retrieve all Visits
exports.findAll = (req, res) => {
  const name = req.query.brewery;

  pool.connect().then((client) => {
    client
      .query("SELECT * FROM visits ORDER BY date DESC;")
      .then(function (result) {
        client.release();
        res.send(result.rows);
      })
      .catch(function (err) {
        console.log("Error @ findAll():", err);
        res.status(500).send({
          message: err.message || `An error occurred while retrieving Visits: ${err}`
        });
      });
  });
};

// Find a single Visit with an id
exports.findOne = (req, res) => {
  const findId = req.params.id;
  console.log(`Find id: ${findId}`);
  pool.connect().then((client) => {
    client
      .query(`SELECT * FROM visits WHERE id=${findId};`)
      .then(function (result) {
        client.release();
        res.send(result.rows);
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving Visit with id ${findId}: ${err}`
        });
      });
  });
};

// Update a Visit by the id in the request
exports.update = (req, res) => {
  Visit.update(req.body, {
    where: { id: req.params.id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Visit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Visit with id ${req.params.id}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Visit with id=" + req.params.id + `: ${err}`
      });
    });
};

// Delete a Visit with the specified id in the request
exports.delete = (req, res) => {
  const brewRecordDeleteID = req.params.id;

  console.log("brewRecordDeleteID = req.params.id", req.body);
  console.log("Deleting brewID main: ", brewRecordDeleteID);
  pool.connect().then(function (client) {
    client
      .query("DELETE FROM beers WHERE visit_id=$1;", [brewRecordDeleteID])
      .then(function (result) {
        client.query("DELETE FROM visits WHERE id=$1;");
      })
      .then(function (result) {
        client.release();
        res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).send({
          message: `Could not delete Visit with id=${deleteId}: ${err}`
        });
      });
  });
};
