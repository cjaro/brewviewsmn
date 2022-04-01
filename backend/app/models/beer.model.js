module.exports = (sequelize, Sequelize) => {
  const Visit = import("./visit.model");

  const Beer = sequelize.define("beer", {
    name: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INTEGER
    },
    notes: {
      type: Sequelize.STRING
    },
    visit_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Visit,
        key: "id"
      }
    },
    abv: {
      type: Sequelize.INTEGER
    }
  });
  return Beer;
};
