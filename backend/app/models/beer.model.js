module.exports = (sequelize, Sequelize) => {
  return sequelize.define("beer", {
    name: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INT
    },
    tasting_notes: {
      type: Sequelize.STRING
    },
    visit_id: {
      foreign_key: "visit_id"
    } ,
    abv: {
      type: Sequelize.INT
    }
  });
};
