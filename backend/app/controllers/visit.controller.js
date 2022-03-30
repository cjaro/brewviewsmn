const db = require("../models");
const Visit = db.visits;
const Op = db.Sequelize.Op;

// Create and Save a new Visit
exports.create = (req, res) => {
  if (!req.body.brewery) {
    res.status(400).send({
      message: "The parameter `req.body.brewery` cannot be empty!"
    });
    return;
  }

  const visit = {
    brewery: req.body.brewery,
    date: req.body.date,
    notes: req.body.notes
  };

  Visit.create(visit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error occurred while creating the Visit: ${err}`
      });
    });
};

// Retrieve all Visits
exports.findAll = (req, res) => {
  const name = req.query.brewery;
  let condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Visit.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error occurred while retrieving Visits: ${err}`
      });
    });
};

// Find a single Visit with an id
exports.findOne = (req, res) => {
  const findId = req.params.id;
  Visit.findByPk(findId)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Visit with id ${findId}.`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Visit with id ${findId}: ${err}`
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
  const deleteId = req.params.id;
  Visit.destroy({
    where: { id: deleteId }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Visit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Visit with id=${deleteId}. Maybe Visit was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Visit with id=${deleteId}: ${err}`
      });
    });
};

// Delete all Visits from the database.
exports.deleteAll = (req, res) => {
  Visit.destroy({
    where: {},
    truncate: false
  })
    .then((nums) => {
      res.send({ message: `${nums} Visits were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while removing all Visits."
      });
    });
};
