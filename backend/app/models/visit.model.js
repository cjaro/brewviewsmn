module.exports = (sequelize, Sequelize) => {
  let Beer = import("./beer.model");

  let Visit = sequelize.define("visits", {
    brewery: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    notes: {
      type: Sequelize.STRING
    }
  });
  Visit.hasMany(Beer);
  return Visit;
};
