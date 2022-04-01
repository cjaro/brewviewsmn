module.exports = (app) => {
  const visitDetails = require("../controllers/visit-details.controller.js");
  var router = require("express").Router();

  // Retrieve all Visit Details
  router.get("/", visitDetails.findAllDetails);

  // Update with id
  router.put("/:id", visitDetails.update);

  // Delete with id
  router.delete("/:id", visitDetails.delete);

  app.use("/api/Visits", router);
};
