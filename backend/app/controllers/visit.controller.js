const db = require("../models");
const Visit = db.visits;
const Op = db.Sequelize.Op;

// Create and Save a new Visit
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Visit
    const visit = {
        name: req.body.name,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Visit in the database
    Visit.create(visit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Visit."
            });
        });
};

// Retrieve all Visits from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Visit.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Visits."
            });
        });
};

// Find a single Visit with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Visit.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Visit with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Visit with id=" + id
            });
        });
};

// Update a Visit by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Visit.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Visit was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Visit with id=${id}. Maybe Visit was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Visit with id=" + id
            });
        });
};

// Delete a Visit with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Visit.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Visit was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Visit with id=${id}. Maybe Visit was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Visit with id=" + id
            });
        });
};

// Delete all Visits from the database.
exports.deleteAll = (req, res) => {
    Visit.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Visits were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Visits."
            });
        });
};

// Find all published Visits
exports.findAllPublished = (req, res) => {
    Visit.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Visits."
            });
        });
};
