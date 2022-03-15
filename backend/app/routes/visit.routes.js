module.exports = app => {
    const visits = require("../controllers/visit.controller.js");
    var router = require("express").Router();

    // Create a new Visit
    router.post("/", visits.create);

    // Retrieve all Visits
    router.get("/", visits.findAll);

    // Retrieve all published Visits
    router.get("/published", visits.findAllPublished);

    // Retrieve a single Visit with id
    router.get("/:id", visits.findOne);

    // Update a Visit with id
    router.put("/:id", visits.update);

    // Delete a Visit with id
    router.delete("/:id", visits.delete);

    // Create a new Visit
    router.delete("/", visits.deleteAll);

    app.use('/api/Visits', router);
};
